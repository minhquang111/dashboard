import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Product from "./pages/Product";
import Order from "./pages/Order";
import ApplicationProduct from "./components/product/ApplicationProduct";
import { useDispatch } from "react-redux";
import { getCategory } from "./actions/categoryActions";
import { getProducts } from "./actions/productActions";
import { getOrders } from "./actions/orderActions";
import ApplicationOrder from "./components/order/ApplicationOrder";

import "./style/App.css";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const showSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts());
    dispatch(getOrders());
  }, []);

  return (
    <Router>
      <Sidebar openSidebar={openSidebar} />
      <div className={openSidebar ? "container active" : "container"}>
        <Navbar showSidebar={showSidebar} openSidebar={openSidebar} />
        <Switch>
          <Route exact path="/" component={ApplicationOrder} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/:id" component={ApplicationProduct} />
          <Route exact path="/newproduct" component={ApplicationProduct} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/order/:id" component={ApplicationOrder} />
          {/* <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/customer" component={Customer} />
               
               
                <Route exact path="/about" component={About} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
