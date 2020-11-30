import React from 'react';
import Header from '../components/Header';
class College extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>College</div>
            </div>
        )
    }
}
export default College;