import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Add Contact</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="input-group">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control my-5"
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                placeholder="Number"
                className="form-control"
              />
            </div>
            <div className="input-group">
              <Link to="/add" className="btn btn-dark">
                <input
                  type="submit"
                  value="Add Student"
                  className="btn btn-block btn-dark mt-5"
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
