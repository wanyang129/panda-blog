import React from 'react';
import Header from '../components/Header';
class Code extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>Code</div>
            </div>
        )
    }
}
export default Code;