import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import About from "./components/view/About";
import Customer from "./components/view/Customer";
import Dashboard from "./components/view/Dashboard";
import Order from "./components/view/Order";
import Product from "./components/view/Product";
import CustomerContextProvider from "./contexts/customerContext";
import ProductContextProvider from "./contexts/productContext";
import OrderContextProvider from "./contexts/orderContext";

import "./style/App.css";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const showSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <CustomerContextProvider>
      <ProductContextProvider>
        <OrderContextProvider>
          <Router>
            <Sidebar openSidebar={openSidebar} />
            <div className={openSidebar ? "container active" : "container"}>
              <Navbar showSidebar={showSidebar} openSidebar={openSidebar} />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/customer" component={Customer} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Router>
        </OrderContextProvider>
      </ProductContextProvider>
    </CustomerContextProvider>
  );
}

export default App;
