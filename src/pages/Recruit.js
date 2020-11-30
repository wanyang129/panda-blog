import React from 'react';
import Header from '../components/Header';
class Recruit extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>Recruit</div>
            </div>
        )
    }
}
export default Recruit;