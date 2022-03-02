import React from "react";

export default class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            color: 'white',
            inputvalue: 0 
        };
    }

    reset = () => {    
        this.setState( {
            count: 0,
            color: 'white',
            inputvalue: 0     
        } )
    }

    getColor = () => {
        if (this.state.count === 0)
            return 'white';
        else {
            if (this.state.count > 10)
                return 'green';
            else if (this.state.count > 5)
                return 'blue';
            else if (this.state.count > 0)
                return 'red';
            else return 'grey'
        }
    }

increase = () => {   if(this.state.count<15 )
     this.setState( { count: this.state.count + 1 } ) 
     }

decrease = () => {   
                  if(this.state.count>0 && this.state.count<16)
                  this.setState( { count: this.state.count - 1 } ) 
                 }

initialise = () => { 
    if(this.state.inputvalue<=15 && this.state.inputvalue>0) 
    this.setState({ count: this.state.inputvalue })
 }

 handleInput = (event ) => { this.setState( { inputvalue: Number(event.target.value) } ) }

render() {
    const currentColor =this.getColor();
        return (
        <>
            <div className="container-fluid m-2 p-3 bg-primary" >
                <div className="container-fluid m-3" style = { { display: 'flex' } } >
                    <h3>Initialise the Counter :</h3>
                    <input type="Number"  value={this.state.inputvalue} onChange={this.handleInput} />
                    <button type="submit" onClick = { this.initialise } >Go</button>
                </div>
                <div style = {{ display: 'flex', marginLeft: '370px', marginBottom: '20px' }} >
                    <button type="submit" onClick={this.decrease}>-</button>
                    <div>{this.state.count}</div>
                    <button type="submit" onClick={this.increase}>+</button>
                </div>

                <div style={{ display: 'flex', marginLeft: '218px' }}>
                    <h2>Intensity:</h2>
                    <div style = {{ width: '50px', height: '50px', backgroundColor: currentColor , border: 'solid black 1px' }} ></div>
                    <button type="submit" onClick={this.reset} >Reset</button>
                </div>
            </div>
        </>
    );
}
}
