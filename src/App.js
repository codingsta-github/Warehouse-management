import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";
import Blogs from "./Pages/Blogs/Blogs";
import CarUpdate from "./Pages/CarUpdate/CarUpdate";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import AddInventoryItem from "./Pages/AddInventoryItem/AddInventoryItem";
import Home from "./Pages/Home/Home";
import Cars from "./Pages/Home/Cars/Cars";
import Recommendation from "./Pages/Home/Recommendation/Recommendation";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cars" element={<Cars></Cars>}></Route>
        <Route
          path="/recommendation"
          element={<Recommendation></Recommendation>}
        ></Route>

        <Route
          path="/car/:_id"
          element={
            <RequireAuth>
              <CarUpdate></CarUpdate>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manageInventories"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/addInventoryItem"
          element={
            <RequireAuth>
              <AddInventoryItem></AddInventoryItem>
            </RequireAuth>
          }
        ></Route>

        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
