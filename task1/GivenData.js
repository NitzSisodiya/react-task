import React from "react";

class GivenData extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <>
                <div className="givenData ">
                    <ul>
                        <li>Name : {this.props.userda.name}</li>
                        <li>E-mail : {this.props.userda.email}</li>
                        <li>Contact : {this.props.userda.contact}</li>
                    </ul>
                </div>
            </>
        );
    }
} 
export default GivenData; 