import "../../style/pagetable.css";
import {
  TableContainer,
  Grid,
  TextField,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SaveIcon from "@mui/icons-material/Save";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  getSingleProduct,
  editSingleProduct,
  addNewProduct,
} from "../../actions/productActions";

const ApplicationProduct = () => {
  // state
  const [category, setCategory] = useState(String);
  const [name, setName] = useState(String);
  const [numInStock, setNumInStock] = useState(Number);
  const [unitPrice, setUnitPrice] = useState(Number);

  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.category.list);
  const singleProduct = useSelector((state) => state.product.singleProduct);

  useEffect(() => {
    if (pathname.split("/")[1] === "product") {
      const id = pathname.split("/")[2];
      dispatch(getSingleProduct(parseInt(id)));
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname.split("/")[1] === "product") {
      loadData();
    }
  }, [singleProduct]);

  const loadData = () => {
    if (!singleProduct) return;
    setCategory(singleProduct.category);
    setName(singleProduct.name);
    setNumInStock(singleProduct.numInStock);
    setUnitPrice(singleProduct.unitPrice);
  };

  const handleBack = () => {
    history.replace(`/product`);
  };

  const handleSave = () => {
    if (pathname.split("/")[1] === "product") {
      const product = {
        category,
        categoryId: singleProduct.categoryId,
        id: singleProduct.id,
        name,
        numInStock: parseInt(numInStock),
        unitPrice: parseInt(unitPrice),
      };
      dispatch(editSingleProduct(product));
    } else if (pathname.split("/")[1] === "newproduct") {
      const newProduct = {
        category,
        categoryId: categoryList.find((x) => x.name === category).id,
        name,
        numInStock: parseInt(numInStock),
        unitPrice: parseInt(unitPrice),
      };

      console.log("newProduct", newProduct);
      dispatch(addNewProduct(newProduct));
    }
  };

  return (
    <div className="box__wrapper">
      <p className="box__route">Application / Product</p>
      <TableContainer
        sx={{ boxShadow: 1, borderRadius: 1 }}
        className="table__wrapper"
      >
        <h2>Product</h2>
        <hr className="line-bottom"></hr>
        <Grid container spacing={3} mt={1} mb={3}>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-select-currency"
              select
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              helperText="Please select your currency"
              sx={{ width: "100%" }}
            >
              {categoryList.map((category) => (
                <MenuItem key={category.id} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-basic"
              label="Product"
              variant="outlined"
              sx={{ width: "100%" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              sx={{ width: "100%" }}
              type="number"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              sx={{ width: "100%" }}
              type="number"
              value={numInStock}
              onChange={(e) => setNumInStock(e.target.value)}
            />
          </Grid>
        </Grid>
        <hr className="line-bottom"></hr>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            p: 1,
            m: 2,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={handleSave}
            sx={{ ml: 2 }}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button
            variant="contained"
            // color="primary"
            sx={{ ml: 2 }}
            onClick={handleBack}
            startIcon={<ArrowBackIosNewIcon />}
          >
            Back
          </Button>
        </Box>
      </TableContainer>
    </div>
  );
};

export default ApplicationProduct;
