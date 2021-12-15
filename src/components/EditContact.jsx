import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentContact = contacts.find((value) => value.id === parseInt(id));
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const checkEmail = contacts.find(
    (contact) => contact.id !== parseInt(id) && contact.email === email
  );
  const checkNumber = contacts.find(
    (contact) => contact.id !== parseInt(id) && contact.number === number
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
    dispatch({ type: "UPDATE", payload: data });
    toast.success("Student update succesfully!");
  };

  return (
    <div className="container">
      {currentContact ? (
        <div className="row">
          <h1 className="display-3 text-center">Edit Contact {id}</h1>
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <ToastContainer />
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
                <Link to="/">
                  <input
                    type="submit"
                    value="Update Student"
                    className="btn btn-block btn-dark mt-5"
                  />
                </Link>
                <Link to="/" className="btn btn-danger  mt-5 mx-5">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          Student Contact with id:{id} not found
        </div>
      )}
    </div>
  );
};

export default EditContact;
