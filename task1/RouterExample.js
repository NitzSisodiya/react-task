import React from 'react';
import { BrowserRouter as Router , Routes ,Route ,Link  } from 'react-router-dom';
import Header from './Header.js';
import Body from './Body.js';
import Foot from './Footer1.js';
import '../../Hello.css';



class RouterExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'lightgreen'
        };
    }

    changeColor = (ch) => {
        this.setState({ color: ch || "lightgreen" });
    }

    render() {
        return (
            <> <Router>
               <ul style={{listStyleType:'none', display:'inline-flex'}} >
                   <li className='teri' > <Link to='/header' style={{textDecoration:'none'}} > Header</Link>  </li>
                   <li className='teri'> <Link to='/body'>Body</Link> </li>
                   <li className='teri'> <Link to='/foot'>footer1</Link> </li>
               </ul>
                  
                    
                  <div className='container p-2' style={{ backgroundColor: this.state.color }} >
                      <Routes>
                          <Route path='/header' element={<Header changeColor={this.changeColor} />}/>
                          <Route path='/body' element={ <Body />} />
                        <Route path='/foot' element={<Foot changeColor={this.state.color}/>} /> 
                    </Routes>
                    </div>
                    </Router>
               
            </>
        );
    }
}
export default RouterExample;

