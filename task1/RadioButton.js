import React from "react";

class RadioButton extends React.Component {
  render() {
    return (
      <>
        <div className='RadioButton'>
          <input name="color" type="radio" value="grey" onClick={this.props.changeColor} />Grey
          <input name="color" type="radio" value="blue" onClick={this.props.changeColor} />Blue
        </div>
      </>
    );


  }
}
export default RadioButton; 