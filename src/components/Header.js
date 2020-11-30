import React from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUrl: '',
            navbarList: [
                {
                    id: 1,
                    text: '首页',
                    url: '/'
                },
                {
                    id: 2,
                    text: '博客',
                    url: '/blog'
                },
                {
                    id: 3,
                    text: '学院',
                    url: '/college'
                },
                {
                    id: 4,
                    text: '下载',
                    url: '/downloads'
                },
                {
                    id: 5,
                    text: '论坛',
                    url: '/forum'
                },
                {
                    id: 6,
                    text: '问答',
                    url: '/questions'
                },
                {
                    id: 7,
                    text: '代码',
                    url: '/code'
                },
                {
                    id: 8,
                    text: '招聘',
                    url: '/recruit'
                },
                {
                    id: 9,
                    text: '电子书',
                    url: '/ebook'
                },
                {
                    id: 10,
                    text: 'VIP会员',
                    url: '/member'
                }
            ]
        }
    }
    componentDidMount() {
        console.log(this);
        console.log(this.props.match.url.split('/')[1])
        this.setState({
            currentUrl: '/' + this.props.match.url.split('/')[1]
        });
    }
    render() {
        return (
            <header className="header-container">
                <div className="header-top-container">
                <div className="header-logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="header-link-container">
                    <a href="#/login" className="header-top-link">登录</a>
                    <span className="header-top-gap">|</span>
                    <a href="" className="header-top-link">注册</a>
                    <span className="header-top-gap">|</span>
                    <a href="" className="header-top-link">帮助中心</a>
                </div>
                </div>
                <div className="header-navbar">
                <ul className="header-navbar-container">
                    {this.state.navbarList.map((navbar) => 
                        <li key={navbar.id} className={navbar.url===this.state.currentUrl? "header-navbar-item active": "header-navbar-item"}><a className="header-navbar-link" href={`#${navbar.url}`}>{navbar.text}</a></li>
                    )}
                </ul>
                </div>
            </header>
        );
    }
}

export default Header;
