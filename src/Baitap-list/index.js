import React, {Component} from "react";
import data from "./data.json";
import DanhSachPhim from "./danhSachPhim";

export default class BaiTapList extends Component {
    constructor(props){
        super(props);
        this.state = {
            listMovie: data,
        };
    }

    render(){
        const { listMovie } = this.state;

        return(
            <div>
                <h1>Bài Tập 2: List key</h1>
                <h3>Danh sách phim</h3>
                <DanhSachPhim listMovie={listMovie} />
            </div>
        )
    }
}