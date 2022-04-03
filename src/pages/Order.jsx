import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteOrder } from "../actions/orderActions";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Fab,
  Box,
  Pagination,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import "../style/pagetable.css";

const Order = () => {
  const orderList = useSelector((state) => state.order.list);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleEditOrder = (order) => {
    history.replace(`/order/${order.id}`);
  };

  const handleAddOrder = () => {
    history.replace(`/neworder`);
  };
  const handleDeleteOrder = (order) => {
    dispatch(deleteOrder(order));
  };

  return (
    <div className="box__wrapper">
      <p className="box__route">React CRM / Order</p>
      <TableContainer
        sx={{ boxShadow: 1, borderRadius: 1 }}
        className="table__wrapper"
      >
        <h2>Orders ({orderList ? orderList.length : 0})</h2>
        <hr className="line-bottom"></hr>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Reference</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Shipping Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList &&
              orderList.map((order) => (
                <TableRow key={order.id}>
                  <TableCell component="th" scope="row">
                    {order.reference}
                  </TableCell>
                  <TableCell>{order.products.length}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.firstname}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>{order.shippedDate}</TableCell>
                  <TableCell>
                    <Box sx={{ mt: -1, mb: -1 }}>
                      <Fab
                        sx={{ mr: 1, zIndex: 1 }}
                        color="success"
                        size="small"
                        onClick={() => handleEditOrder(order)}
                      >
                        <ModeEditOutlineIcon />
                      </Fab>
                      <Fab
                        sx={{ zIndex: 1 }}
                        size="small"
                        onClick={() => handleDeleteOrder(order)}
                      >
                        <DeleteIcon />
                      </Fab>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <Pagination count={10} variant="outlined" />
        </Box>
      </TableContainer>
      <Fab
        sx={{ position: "fixed", bottom: 10, right: 100 }}
        color="primary"
        size="small"
      >
        <SearchIcon />
      </Fab>
      <Fab
        sx={{ position: "fixed", bottom: 10, right: 30 }}
        color="error"
        size="small"
        onClick={handleAddOrder}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Order;
