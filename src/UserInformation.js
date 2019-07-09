import React from 'react';
import './UserInformation.css';
import PullDownUser from "./PullDownUser";


//拍手可能なポイントのコンポーネント
class CanApplausePoints extends React.Component {
    render() {
        return (
            <div>
                <a>拍手できる: 100</a>
            </div>
        )
    }
}

//拍手されたポイントのコンポーネント
class ReceivedApplausePoints extends React.Component {
    render() {
        return (
            <div>
                <a>拍手された: 0</a>
            </div>
        )
    }
}

export default class UserInformation extends React.Component {
    render() {
        return (
            <div className={"user_information"}>
                <div className={"pull_down_user"}>
                    <PullDownUser/>
                </div>
                <div className={"can_applause_points"}>
                    <CanApplausePoints/>
                </div>
                <div className={"received_applause_points"}>
                    <ReceivedApplausePoints/>
                </div>
            </div>
        )
    }
}