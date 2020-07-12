import React from "react";
import ItemProduct from "./itemProduct";

export default function ListSmartPhones() {
  return (
    <div id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
      <h1 className="text-white text-center items__heading">BEST SMARTPHONE</h1>
      <div className="row">
        <ItemProduct
          name="iPhone X"
          description="iPhone X features a new all-screen design. Face ID, which makes your face your password"
          image="sp_iphoneX.png"
        />
        <ItemProduct
          name="Galaxy Note7"
          description="The Galaxy Note7 comes with a perfectly symmetrical design for good reason"
          image="sp_note7.png"
        />
        <ItemProduct
          name="Vivo"
          description="A young global smartphone brand focusing on introducing perfect sound quality"
          image="sp_vivo850.png"
        />
        <ItemProduct
          name="Blackberry"
          description="BlackBerry is a line of smartphones, tablets, and services originally designed"
          image="sp_blackberry.png"
        />
      </div>
    </div>
  );
}
