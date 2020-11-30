import React from 'react';
import Header from '../../components/Header';
import './Detail.css';
class Detail extends React.Component {
    constructor(props) {
        super(props);
        console.log('this detail', this)
        this.state = {
            downloadId: this.props.match.params.id - 0
        }
    }
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="detail-container">
                    <div className="detail-title">python大作业-爬虫（完美应付大作业）.zip</div>
                    <div className="detail-extra">
                        <div className="stars-box">
                            <div className="stars-item"></div>
                            <div className="stars-item"></div>
                            <div className="stars-item"></div>
                            <div className="stars-item"></div>
                            <div className="stars-item"></div>
                        </div>
                        <div className="extra-item detail-score">所需积分/C币：<span className="score-num">44</span></div>
                        <span className="extra-item detail-time">2020-06-18 21:09:28</span>
                        <span className="extra-item detail-size">274MB</span>
                        <span className="extra-item detail-type">ZIP</span>
                        <div className="extra-item detail-collect"><img className="collect-icon" src={'/images/collect.png'} /><span className="collect-label">收藏</span></div>
                        <span className="extra-item detail-report">举报</span>
                    </div>
                    <div className="detail-content">python大作业分享--30多个项目任你选（由于上传大小限制分多个文件上传。爬虫：https://download.csdn.net/download/weixin_49960044/12533382小游戏：http://download.csdn.net/download/weixin_43960044/12533379),应付大作业完全没问题。内涵30多个项目，随意挑选。爬虫（爬抖音视频、下载B站视频、爬天气预报等）小游戏（五子棋、坦克大战、贪吃蛇、拼图等）。</div>
                    <div className="detail-labels">
                        <span className="label-item">python</span>
                        <span className="label-item">期末作业</span>
                        <span className="label-item">游戏</span>
                        <span className="label-item">爬虫</span>
                        <span className="label-item">python爬虫大作业</span>
                    </div>
                    <div className="detail-btns">
                        <span className="detail-btn">立即下载</span>
                        <span className="detail-btn">低至0.43元/次</span>
                        <span className="detail-btn">身份认证VIP会员低至7折</span>
                    </div>
                    <div className="comment-container">
                        <input className="comment-input" type="text" name="comment" placeholder="下载该资源后方可评论" />
                        <button className="comment-btn">评论</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail;