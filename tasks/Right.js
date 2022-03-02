import React from "react";

class Right extends React.Component {
    render(){
        return (
            <>
            <div class="right">
        <h1 style={{paddingTop: 10 }}><b>Contact Us</b> </h1>
        <input type="text" placeholder="write your name.."/>
        <br/>
        <input type="text" placeholder="write a valid email adddress.."/>
        <br/>
        <textarea type="text" placeholder="Enter your message.." rows="5"></textarea>
        <br/>
        <button type="submit"><b>SUBMIT</b></button>
      </div>
            </>
        );
    }
}
export default Right ;