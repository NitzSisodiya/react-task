import React from "react";
import image from '../../Components/img/music.jpg';
class Photo extends React.Component {
    render() {
        return (
            <>
                <div className="col-6">
                    <div className="image  p-2 ">
                        <img className="image" src={image} alt=" man surfing net" height={'200px'} width={'300px'} />
                    </div>
                </div>
            </>
        );
    }
}
export default Photo