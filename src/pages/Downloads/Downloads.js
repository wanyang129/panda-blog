import React from 'react';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import './Downloads.css';
class Downloads extends React.Component {
    constructor(props) {
        super(props);
        this.goDownloadDetail = this.goDownloadDetail.bind(this);
        this.state = {
            downloadList: [
                {
                    id: 1,
                    size: '8.51MB',
                    time: '2012-06-08',
                    title: 'C++各种小游戏（我们老师的）',
                    desc: '这是我们老师做的，各种小游戏，我感觉还不错，所以传上来玩玩。是C++做的，有的可以用来提交作业和课程设计都行的，而且对于C++游戏初学者的话很有帮助的。',
                    icon: 'rar'
                },
                {
                    id: 2,
                    size: '2.73MB',
                    time: '2018-04-20',
                    title: 'pycharm完整教程_全套.pdf',
                    desc: 'pycharm完整教程_全套.pdf，祝大家不再因为Python库掉头发',
                    icon: 'pdf'
                },
                {
                    id: 3,
                    size: '28.56MB',
                    time: '2011-05-30',
                    title: '电脑常见问题与故障1000例（高清PDF中文版）',
                    desc: '本书在向个人电脑用户，系统而详细地讲解了电脑的常见故障，同时让读者更直接、更深刻地了解电脑故障产生原因和排除方法，从而达到能够自己解决电脑故障的目的。本书分10章，共有1000多个实例，编写时从产生电脑故障的各个方面入手，涉及到硬件、软件等各方面的内容，其中包括开/关机中的问题、操作中的问题、软件运用的故障、外设故障以及病毒防治等等，这些都是个人电脑使用时经常遇到的难题。希望读者通过本书的学习，当电脑产生故障的时候，能方便快捷地查询解决方案，从而排除故障。本书在附录中提供了提高电脑效率的一些技巧和参数设置，以方便读者的使用。本书既可以作为一本电脑故障排除方面的通俗教材，也可以当作速查手册使',
                    icon: 'unknow'
                },
                {
                    id: 4,
                    size: '608.96MB',
                    time: '2018-06-14',
                    title: 'Visio_2016',
                    desc: 'visio_2016下载安装，亲测可用，不需要破解，而且无密钥。简单方便实用',
                    icon: 'zip'
                },
                {
                    id: 5,
                    size: '49B',
                    time: '2017-09-19',
                    title: 'eclipse下载',
                    desc: '内含eclipse和eclipse-jee-mars-2-winx32-x86_64两个版本 可随意下载',
                    icon: 'txt'
                }
            ]
        }
    }
    goDownloadDetail(e) {
        console.log('goDownloadDetail', e)
    }
    changePage(pageIndex) {
        console.log('changePage', pageIndex);
        // 获取pageIndex对应页码的数据
    }
    componentDidMount() {
        // console.log(this)
    }
    render() {
        const pagination = {
            total: 95,
            onChange: this.changePage
        };
        return (
            <div>
                <Header {...this.props} />
                <div className="download-container">
                    <ul className="download-wrap">
                        {this.state.downloadList.map((downloadItem) => 
                            <li className="download-item" key={downloadItem.id}>
                                <a className="download-item-wrap" href={`#/downloads/detail/${downloadItem.id}`}>
                                    <div className="download-left">
                                        <div className="download-icon">
                                            <img src={`/images/${downloadItem.icon}.svg`} />
                                        </div>
                                        <div className="download-size">{downloadItem.size}</div>
                                    </div>
                                    <div className="download-right">
                                        <div className="download-title">{downloadItem.title}<span className="upload-time">{downloadItem.time}</span></div>
                                        <div className="download-desc">{downloadItem.desc}</div>
                                    </div>
                                </a>
                            </li>
                        )}
                    </ul>
                    <Pagination {...pagination}/>
                </div>
            </div>
        )
    }
}
export default Downloads;