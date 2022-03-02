import React from "react";
import { BrowserRouter as Mrouter, Routes, Route ,Link} from "react-router-dom";

import Counter from "./Counter";
import App from "../task1/App";

export default class HomePage extends React.Component{
    render(){
        return(
        <>
        <div className="container-fluid bg-info ">
        <Mrouter>
            <nav className="p-5">
              <ul  style= {{listStyleType:'none', display:'inline-flex'}} >            
                   <li> <Link to='/c' style={{textDecoration:'none'}} >Tab1</Link>  </li>
                   <li> <Link to='/tab2' style={{textDecoration:'none'}} >TAb2</Link> </li>                     
              </ul>
            </nav>             
        
         <Routes>
             <Route path='/c' element={<Counter/>}/>
             <Route path='/tab2' element={<App/>}/>
         </Routes>
         </Mrouter>
        </div>
         
        </>
           
        );
    }
}