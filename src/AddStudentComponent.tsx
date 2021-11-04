import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddStudent } from "./redux/effects/Students";

import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";

export const AddStudentComponent: React.FC = () => {
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

  const EditeStudentDetails = (e: any) => {
    e.preventDefault();
    dispatch(AddStudent(student));
    setIsOpen(false);
  };

  return (
    <div>
      <>
        <button className="btn btn-info" onClick={() => setIsOpen(true)}>
          Add Student
        </button>

        <Modal
          appElement={document.getElementById('root') as HTMLElement}
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={EditeStudentDetails} className="modalCon">
            <h4>Add Student</h4>

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

export default AddStudentComponent;
