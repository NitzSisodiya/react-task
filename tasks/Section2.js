import React from "react";
import S2left from "./S2left";
import S2right from "./S2right";

class Section2 extends React.Component {
    render(){
        return (
            <>
            <div className="section2">
             <S2left/>
             <S2right/>
             </div>
            </>
        );
    }
}
export default Section2 ;