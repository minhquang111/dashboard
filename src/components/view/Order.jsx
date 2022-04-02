import "../../style/pagetable.css";
const Order = () => {
  return (
    <div className="box__wrapper">
      <p className="box__route">React CRM / Order</p>
      <div className="table__wrapper">
        <h2>Orders (11)</h2>
        <hr className="line-bottom"></hr>
        <table className="table__content">
          <thead className="table__header">
            <tr>
              <th>Reference</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Order</th>
              <th>Order Date</th>
              <th>Shipping Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr>
              <td>order-2-2-1-2</td>
              <td>2</td>
              <td>9.99</td>
              <td>Larsen</td>
              <td>2017-01-01</td>
              <td>2017-01-01</td>
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

export default Order;
