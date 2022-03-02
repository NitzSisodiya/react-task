import React from "react";

class Foot extends React.Component {

constructor(props){
    super(props)
}
    render() {
        return (
            <>
                <div className='container my-2 p-5 ' style={{ textAlign: 'center',backgroundColor:'blue', border: 'solid 2px' }}>
                    <h1> this is footer.</h1>
                    <div className="box" style={{ width:'100px', height:'50px', border:' 2px solid', background:this.props.changeColor,align:'center' }} >
                    </div>
                </div>
            </>
        );
    }
}
export default Foot; 