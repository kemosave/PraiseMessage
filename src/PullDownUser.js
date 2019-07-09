import React from 'react';
import './UserInformation.css';
import DropDownMenu from './Components/DropDownMenu';
import Img from './images/icon_frame.jpeg';
import {Select} from "@material-ui/core";


export default class PullDownUser extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
        }
    }


    ImgChange(event) {
        var fname = event.options[event.selectedIndex].value;
            if (fname==='1') {document.icon.src =  "./images/icon1.jpeg".src}
            if (fname==='2') {document.icon.src =  "./images/icon2.jpeg".src}
            if (fname==='3') {document.icon.src =  "./images/icon3.jpeg".src}
    }

    render() {
        return (
            <div className={"pull_down_user"}>
                <div className={"account_box"}>
                    <img src={Img}  alt="" name="icon"/>

                </div>
                <div className={"drop_down_menu"}>
                    <p>
                        <Select
                            onchange = {(event) => PullDownUser.ImgChange({event})}>
                            <option value = '1'>Taro</option>
                            <option value = '2'>Jiro</option>
                            <option value = '3'>Saburo</option>
                        </Select>
                    </p>
                </div>
            </div>
        )
    }
}



