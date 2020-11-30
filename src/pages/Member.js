import React from 'react';
import Header from '../components/Header';
class Member extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>Member</div>
            </div>
        )
    }
}
export default Member;