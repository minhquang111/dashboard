import { useContext, useEffect } from "react";

import "../style/pagetable.css";

const Customer = () => {
  return (
    <div className="box__wrapper">
      <p className="box__route">React CRM / Customer</p>
      <div className="table__wrapper">
        <h2>Customers (11)</h2>
        <hr className="line-bottom"></hr>
        <table className="table__content">
          <thead className="table__header">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Membership</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr>
              <td>customer.firstname</td>
              <td>customer.lastname</td>
              <td>customer.email</td>
              <td>customer.mobile</td>
              <td>customer.membership</td>
              <td>
                <div className="group-button">
                  <button className="btn btn-success">
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button className="btn btn-light">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="table__footer">
          <ul className="table__paginate">
            <li>
              <button>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </li>
            <li>
              <button>1</button>
            </li>
            <li>
              <button disabled>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customer;
