import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import PullDownUser from "./PullDownUser";
import UserInformation from "./UserInformation";


//選択中ユーザーのコンポーネント
class SelectedUser extends React.Component {
    render() {
        return (
            <div className="selected_user">
                <UserInformation />
            </div>
        )
    }
}

//投稿機能のコンポーネント
class PostFunction extends React.Component {
    // 未入力の場合は投稿できないようにする
    renderErrorText() {
        return this.props.valid ? false : (
            <p className="invalid">項目が入力されていません。</p>
        )
    }

    render() {
        return (
            <div className="post_function">
                <div className={"post_function-pull_down_user"}>
                    <PullDownUser/>
                </div>
                <div className={"input_text"}>
                    <input type={"text"} defaultValue={this.props.value} />
                </div>
                <div className={"post_button"}>
                    <button onClick={() => this.postForm()} disabled={this.props.flag}>投稿</button>
                </div>
                {this.renderErrorText()}
            </div>
        )
    }
}

//投稿後に表示されるコンポーネント
class AfterPostView extends React.Component {
    render() {
        return (
            <div className={"after_post_view"}>
                <a>ここに投稿後表示</a>
            </div>
        )
    }
}

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            field: {
              inputValue: {value: null},
            },
            viewTitle : props.title,
            errFlg : true,
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    //投稿処理
    postForm() {

    }

    render() {
        return (
            <div className='my_account'>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.viewTitle} />
                <SelectedUser />
                <PostFunction />
                <AfterPostView />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App title={'賞賛メッセージアプリ'} />,
    document.getElementById('root')
);


