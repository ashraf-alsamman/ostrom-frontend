import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudents,
  deleteStudent,
  EditeStudent,
} from "./redux/effects/Students";
import { Student } from "./redux/interfaces/Student";
import { AppState } from "./redux/store";

import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import AddStudentComponent from "./AddStudentComponent";

export const App: React.FC = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
    course: "",
    hours: "",
    price: "",
    birthday: "",
  });

  const onDeleteStudent = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    var x = confirm("Are you sure you want to delete?");
    if (x) {
      dispatch(deleteStudent(id));
    }
  };

  const onEditeStudent = (data: any) => {
    setStudent(data);
    setIsOpen(true);
  };

  const EditeStudentDetails = (e: any) => {
    e.preventDefault();

    dispatch(EditeStudent(student));
    setIsOpen(false);
  };

  const students = useSelector((state: AppState) => state.students);
  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch, students]);

  const Items = students.students.map((data: Student) => (
    <tr key={data.id}>
      <td className="align-middle">{data.first_name}</td>
      <td className="align-middle">{data.last_name}</td>
      <td className="align-middle">{data.birthday}</td>
      <td className="align-middle">{data.course}</td>
      <td className="align-middle">{data.hours}</td>
      <td className="align-middle">{data.price} €</td>
      <td className="align-middle">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => onDeleteStudent(data.id)}
        >
          Delete
        </button>
      </td>
      <td className="align-middle">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => onEditeStudent(data)}
        >
          Edite
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="container">
      <br /> <br /> <br />
      <AddStudentComponent />
      <br />
      <div className="table_con">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>DATE OF BIRTH</th>
              <th>COURSE</th>
              <th>HOURS</th>
              <th>PRICE</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{Items}</tbody>
        </table>
      </div>
      <>
        <br />
        {/* <div> */}

        <Modal
          appElement={document.getElementById('root') as HTMLElement}
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={EditeStudentDetails} className="modalCon">
            <h4>Edit Student</h4>

            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="inputEmail4">First Name</label>
                <input
                  id="first_name"
                  className="form-control"
                  placeholder="   "
                  value={student.first_name}
                  onChange={(e) =>
                    setStudent({ ...student, first_name: e.target.value })
                  }
                  type="text"
                  required
                />
              </div>

              <div className="form-group col-md-2">
                <label htmlFor="LastName">Last Name</label>
                <input
                  className="form-control"
                  id="LastName"
                  placeholder="   "
                  value={student.last_name}
                  onChange={(e) =>
                    setStudent({ ...student, last_name: e.target.value })
                  }
                  type="text"
                  required
                />
              </div>

              <div className="form-group col-md-2">
                <label htmlFor="Birthday">Date of Birth</label>
                <input
                  className="form-control"
                  id="Birthday"
                  placeholder=" "
                  value={student.birthday}
                  onChange={(e) =>
                    setStudent({ ...student, birthday: e.target.value })
                  }
                  type="date"
                  required
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="Course">Course Name</label>
                <input
                  className="form-control"
                  id="Course"
                  placeholder=" "
                  value={student.course}
                  onChange={(e) =>
                    setStudent({ ...student, course: e.target.value })
                  }
                  type="text"
                  required
                />
              </div>

              <div className="form-group col-md-1">
                <label htmlFor="Hours">Hours</label>
                <input
                  className="form-control"
                  id="Hours"
                  placeholder=" "
                  value={student.hours}
                  onChange={(e) =>
                    setStudent({ ...student, hours: e.target.value })
                  }
                  min={1}
                  type="number"
                  required
                />
              </div>

              <div className="form-group col-md-2">
                <label htmlFor="Price">Price €</label>
                <input
                  className="form-control"
                  id="Price"
                  placeholder=" "
                  value={student.price}
                  onChange={(e) =>
                    setStudent({ ...student, price: e.target.value })
                  }
                  min={1}
                  type="number"
                  required
                />
              </div>
            </div>

            <div className="modalFooter align-middle">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </Modal>
      </>
    </div>
  );
};

export default App;
