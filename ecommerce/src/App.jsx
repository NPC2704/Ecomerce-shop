import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/productlist/:category"
          element={<ProductList />}
        ></Route>
        <Route exact path="/product/:id" element={<Product />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
