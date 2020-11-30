import React from 'react';
import Header from '../components/Header';
class EBook extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>EBook</div>
            </div>
        )
    }
}
export default EBook;