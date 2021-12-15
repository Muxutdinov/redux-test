import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const checkEmail = contacts.find(
    (contact) => contact.email === email && contact
  );
  const checkNumber = contacts.find(
    (contact) => contact.number === parseInt(number)
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !number) {
      return toast.warning("Please fill in all inputs");
    } else if (checkEmail) {
      return toast.error("This email already Exists!");
    } else if (checkNumber) {
      return toast.error("This number already Exists!");
    }

    const data = {
      id: Date.now(),
      name: name,
      email: email,
      number: number,
    };
    setNumber("");
    setName("");
    setEmail("");
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student added succesfully!");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Add Contact</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <ToastContainer />
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control my-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                placeholder="Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark mt-5"
              />
              <Link to="/">
                <input
                  type="submit"
                  value="Cancel"
                  className="btn btn-block btn-danger mt-5 mx-5"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
