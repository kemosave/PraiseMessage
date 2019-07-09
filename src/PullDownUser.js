import React from 'react';
import './UserInformation.css';
import AccountBox from '@material-ui/icons/AccountBox';
import DropDownMenu from './Components/DropDownMenu';


export default class PullDownUser extends React.Component {
    render() {
        return (
            <div className={"pull_down_user"}>
                <div className={"account_box"}>
                    <AccountBox />
                </div>
                <div className={"drop_down_menu"}>
                    <DropDownMenu />
                </div>
            </div>
        )
    }
}



