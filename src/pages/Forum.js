import React from 'react';
import Header from '../components/Header';
class Forum extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>Forum</div>
            </div>
        )
    }
}
export default Forum;