import React from "react";
import ItemProduct from "./itemProduct";

export default function ListLaptops() {
    return (
    <div id="laptop" class="container-fluid pt-5 pb-5 bg-light text-dark">
      <h2 className="text-center">BEST LAPTOP</h2>
    <div className="row">
      <ItemProduct name="MACBOOK" description="The MacBook is a brand of notebook computers manufactured by Apple Inc" image="lt_macbook.png" />
      <ItemProduct name="ASUS ROG
" description="the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices" image="lt_rog.png"/>
      <ItemProduct name="HP OMEN
" description="A young global smartphone brand focusing on introducing perfect sound quality" image="lt_hp.png"/>
      <ItemProduct name="LENOVO THINKPAD
" description="The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012" image="lt_lenovo.png"/>
    </div>
    </div>
  );
}