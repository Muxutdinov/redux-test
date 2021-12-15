import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right d-flex justify-content-end">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {contacts.map((value) => (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.number}</td>
                  <td>
                    <Link
                      to={`/edit/${value.id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger mx-3"
                      onClick={() => onDelete(value.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
