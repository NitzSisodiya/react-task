import React from "react";
import pic from '../john1image.jpg'

class Left extends React.Component {
    render(){
        return (
            <>
            <div class="left">
        <div class="cont4">
          <img class="image" src={pic} alt="john image" />
          <h4 style={{paddingBottom: 20  }}>TOP RANKED PROGRAM</h4>
          <p style={{paddingBottom: 20  }}>In mollis nunc sed id semper risus in hendrerit gravida
            . Aliquet enim tortor at auctor urna nunc id cursus. Risus
            at ultrices mi tempus imperdiet. Sapien pellentesque habitant
            morbi tristique senectus et netus. Id cursus
            metus aliquam eleifend mi in. Quis commodo odio aenean sed.</p>
        </div>
        </div>
            </>
        );
    }
}
export default Left ;