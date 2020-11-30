import React from 'react';
import Header from '../components/Header'
class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>Blog</div>
            </div>
        )
    }
}
export default Blog;