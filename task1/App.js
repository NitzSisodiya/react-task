import React from 'react';
import Header from './Header.js';
import Body from './Body.js';
import Foot from './Footer1.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'lightgreen'
        };
    }

    changeColor = (event) => {
        this.setState({ color: event.target.value });
    }

    render() {
        return (
            <>
                <div className='container p-2' style={{ backgroundColor: this.state.color }} >
                    <Header changeColor={this.changeColor} color={this.state.color}/>
                    <Body />
                    <Foot changeColor={this.state.color} />
                </div>
            </>
        );
    }
}
export default App;

