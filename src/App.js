import React from "react";
import "./App.css";
import BaiTap3 from "./Bai-tap3";
import BaiTapList from "./Baitap-list";
import BaiTapCart from "./Bai-tap-cart"

function App() {
  return (
    <div>
      <BaiTap3 />
      <hr />
      <BaiTapList />
      <hr />
      <BaiTapCart />
    </div>
  );
}

export default App;
