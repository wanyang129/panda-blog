import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleJumpPage = this.handleJumpPage.bind(this);
        this.getPages = this.getPages.bind(this);
        this.goPrePage = this.goPrePage.bind(this);
        this.goNextPage = this.goNextPage.bind(this);
        this.changeTarget = this.changeTarget.bind(this);
        this.goPage = this.goPage.bind(this);
        this.goFirstPage = this.goFirstPage.bind(this);
        this.goLastPage = this.goLastPage.bind(this);

        // 父级组件通过props传入数据总数，每页显示条数，显示多少按钮
        // 组件本身维护一个数组，数组中记录当前应该显示的页数序列，用户触发跳页操作时更新这个数组并调用父组件传入的处理函数
        this.state = {
            currentPage: props.currentPage,
            pageIndexList: [], // 维护要显示的页码序列
            totalPages: 0, // 总页数
            targetPage: '' // 跳转操作临时存储输入值
        }
    }
    getPages(currentPage) {
        let _props =this.props;
        let totalPages = Math.ceil(_props.total / _props.pageSize),
            maxSize = _props.maxSize,
            pageIndexList = [];
        if (totalPages <= maxSize) {
            for (let i = 1; i <= totalPages; i++) {
                pageIndexList.push(i);
            }
        } else {
            if (currentPage < maxSize) {
                for (let i = 1; i < maxSize; i++) {
                    pageIndexList.push(i);
                }
                pageIndexList.push('...')
                pageIndexList.push(totalPages);
            } else if (currentPage >= (totalPages - maxSize + 1)) {
                pageIndexList.push(1);
                pageIndexList.push('...');
                for (let i = totalPages - maxSize + 2; i <= totalPages; i++) {
                    pageIndexList.push(i);
                }
            } else if (currentPage >= maxSize && currentPage < (totalPages - maxSize + 1)) {
                pageIndexList.push(1);
                pageIndexList.push('...');
                for (let i = currentPage; i <= currentPage + (maxSize - 2); i++) {
                    pageIndexList.push(i);
                }
                pageIndexList.push('...');
                pageIndexList.push(totalPages);
            }
        }
        return {
            pageIndexList: pageIndexList,
            totalPages: totalPages
        }
    }
    handlePageClick (e) {
        let pageIndex = parseInt(e.target.dataset.index);
        this.handleJumpPage(pageIndex)
    }
    handleJumpPage(pageIndex) {
        if (pageIndex === this.state.currentPage) {
            return;
        }
        if (this.state.totalPages <= this.props.maxSize) {
            return;
        }
        let pagesObj = this.getPages(pageIndex);
        this.setState({
            pageIndexList: pagesObj.pageIndexList,
            totalPages: pagesObj.totalPages,
            currentPage: pageIndex
        });
        this.props.onChange(pageIndex);
        return;
    }
    goPrePage() {
        console.log('page', this.state.currentPage)
        if (this.state.currentPage === 1) {
            return;
        } else {
            console.log(this.state.currentPage - 1);
            this.handleJumpPage(this.state.currentPage - 1);
        }
    }
    goNextPage () {
        console.log('page', this.state.currentPage)
        if (this.state.currentPage === this.state.totalPages) {
            return;
        } else {
            console.log(this.state.currentPage - 1);
            this.handleJumpPage(this.state.currentPage + 1);
        }
    }
    changeTarget(e) {
        this.setState({
            targetPage: /^\d+$/.test(e.target.value) ? e.target.value - 0: ''
        });
    }
    goPage () {
        if(!/^\d+$/.test(this.state.targetPage)) {
            return;
        }
        this.state.targetPage > this.state.totalPages ? this.handleJumpPage(this.state.totalPages): this.handleJumpPage(this.state.targetPage);
        this.setState({
            targetPage: ''
        })
    }
    goFirstPage () {
        if (this.state.currentPage === 1) {
            return;
        }
        this.handleJumpPage(1);
    }
    goLastPage () {
        if (this.state.currentPage === this.state.totalPages) {
            return;
        }
        this.handleJumpPage(this.state.totalPages);
    }
    componentDidMount() {
        let pagesObj = this.getPages(this.state.currentPage);
        this.setState({
            pageIndexList: pagesObj.pageIndexList,
            totalPages: pagesObj.totalPages
        });
    }
    render() {
        console.log('render state', this.state);
        let _btns = [];
        for (let i = 0; i < this.state.pageIndexList.length; i++) {
            if (typeof this.state.pageIndexList[i] === 'number') {
                _btns.push(
                    <li className={this.state.currentPage === this.state.pageIndexList[i] ? 'active pagination-item': 'pagination-item'} data-index={this.state.pageIndexList[i]} key={`page${i}`}
                        onClick={this.handlePageClick}>
                        {this.state.pageIndexList[i]}
                    </li>
                );
            } else {
                _btns.push(
                    <li className="pagination-item" key={`page${i}`}>{this.state.pageIndexList[i]}</li>
                )
            }
        }
        return (
            <ul className="pagination-container">
                {
                    this.props.hideFirstAndLast ? null: (
                        <li className={this.state.currentPage===1?'disabled pagination-item pagination-first': 'pagination-item pagination-first'} onClick={this.goFirstPage}>
                            {this.props.firstLabel || '首页'}
                        </li>
                    )
                }
                {
                    this.props.hidePreAndNext ? null: (
                        <li className={this.state.currentPage===1?'disabled pagination-item': 'pagination-item'} onClick={this.goPrePage}>
                            {this.props.previousLabel || '<上一页'}
                        </li>
                    )
                }
                {_btns}
                {
                    this.props.hidePreAndNext?null: (
                        <li className={this.state.currentPage===this.state.totalPages?'disabled pagination-item': 'pagination-item'} onClick={this.goNextPage}>
                            {this.props.nextLabel || '下一页>'}
                        </li>
                    )
                }
                {
                    this.props.hideFirstAndLast?null: (
                        <li className={this.state.currentPage===this.state.totalPages?'disabled pagination-item': 'pagination-item'} onClick={this.goLastPage}>
                            {this.props.lastLabel || '末页'}
                        </li>
                    )
                }
                {
                    this.props.forbidJump?null:(
                        <li className="pagination-item pagination-jump">
                            共{this.state.totalPages}页，到第
                            <input className="pagination-input" type="tel" value={this.state.targetPage} onChange={this.changeTarget} />
                            页
                        </li>
                    )
                }
                {
                    this.props.forbidJump?null: (
                        <li className="pagination-btn" onClick={this.goPage}>确定</li>
                    )
                }
            </ul>
        )
    }
}
Pagination.propTypes = {
    pageSize: PropTypes.number, // 每页显示多少行
    currentPage: PropTypes.number, // 默认选中页
    dataCount: PropTypes.number, // 数据总条数
    maxSize: PropTypes.number, // 最多显示页码数
    forbidJump: PropTypes.bool, // 是否隐藏跳页操作相关按钮
    hidePreAndNext: PropTypes.bool, // 是否隐藏上一页下一页按钮
    hideFirstAndLast: PropTypes.bool, // 是否隐藏首页末页按钮
    previousLabel: PropTypes.string, // 上一页按钮显示文字
    nextLabel: PropTypes.string, // 下一页按钮显示文字
    firstLabel: PropTypes.string, // 首页按钮显示文字
    lastLabel: PropTypes.string, // 末页按钮显示文字
    onChange: PropTypes.func // 触发跳页操作时调用的处理函数
}
Pagination.defaultProps = {
    pageSize: 10,
    currentPage: 1,
    total: 0,
    forbidJump: false,
    hidePreAndNext: false,
    hideFirstAndLast: false,
    maxSize: 5,
    previousLabel: '<上一页',
    nextLabel: '下一页>',
    firstLabel: '首页',
    lastLabel: '末页',
    onChange: null
}
export default Pagination;