// import React from "react";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./App.css";
// import Home from "./pages/home/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";
// import Login from "./pages/Login";
// import { useSelector } from "react-redux";

// function App() {
//   // console.log(1);
//   const admin = useSelector((state) => state.user.currentUser);
//   //
//   // const currentUser = useSelector((state) => state.user.currentUser);
//   // const admin = currentUser && currentUser.isAdmin;
//   console.log(2);
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" element={<Login />}></Route>
//         {admin && (
//           <React.Fragment>
//             <Topbar />
//             <div className="container">
//               <Sidebar />
//               <Route exact path="/" element={<Home />}></Route>
//               <Route path="/users" element={<UserList />}></Route>
//               <Route path="/user/:userId" element={<User />}></Route>
//               <Route path="/newUser" element={<NewUser />}></Route>
//               <Route path="/products" element={<ProductList />}></Route>
//               <Route path="/product/:productId" element={<Product />}></Route>
//               <Route path="/newproduct" element={<NewProduct />}></Route>
//             </div>
//           </React.Fragment>
//         )}
//       </Switch>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  // console.log(1);
  //const admin = useSelector((state) => state.user.currentUser);
  //
  const currentUser = useSelector((state) => state.user.currentUser);
  const admin = currentUser && currentUser.isAdmin;
  console.log(2);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin && (
          <React.Fragment>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </React.Fragment>
        )}
      </Switch>
    </Router>
  );
}

export default App;
