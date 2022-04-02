import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/productContext";

import "../../style/pagetable.css";

const Product = () => {
  const {
    productState: { products, productLoading },
    getProduct,
  } = useContext(ProductContext);

  useEffect(() => getProduct(), []);

  return (
    <div className="box__wrapper">
      <p className="box__route">React CRM / Product</p>
      <div className="table__wrapper">
        <h2>Products ({products.length})</h2>
        <hr className="line-bottom"></hr>
        <table className="table__content">
          <thead className="table__header">
            <tr>
              <th>Product Name</th>
              <th>Category Name</th>
              <th>Price</th>
              <th>Total In Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {products.length !== 0 &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td></td>
                  <td>{product.unitPrice}</td>
                  <td>{product.numInStock}</td>
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
              ))}
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

export default Product;
