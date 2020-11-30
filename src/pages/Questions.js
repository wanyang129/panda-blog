import React from 'react';
import Header from '../components/Header';
class Questions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>Questions</div>
            </div>
        )
    }
}
export default Questions;