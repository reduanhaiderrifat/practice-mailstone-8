import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Mainlayout = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="min-h-[calc(100vh-95px)]">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Mainlayout;
