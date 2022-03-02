import React from "react";
import RadioButton from "./RadioButton";
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className=' Heading p-3 my-2' style={{ textAlign: 'center', color:'yellow', background: "purple" }} >
                    <RadioButton changeColor={this.props.changeColor} color={this.props.color} />
                    <h1>hello</h1>
                </div>
            </>
        );
    }
}
export default Header;