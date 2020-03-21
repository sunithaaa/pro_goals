import React from "react"
import Employee from './Employee';
import {Switch,Route,Redirect} from 'react-router-dom';

class Home extends React.Component {

    render(){
    return (
        <div>
           
            <h1>PRO GOALS</h1>
            

            <div className="App_1">
                <text id="1">
                <h2>Employee login</h2>
                </text>  
                <div id="emp_id">
                <input type="text" placeholder="enter employee id" className="ei"></input>
                </div>
                <div id="emp_pass">
                <input type="text" placeholder="enter employee password" className="ep"></input>
                </div>
                <div className="container"> 
                
                <button id="b1">
                    Login
                </button>
                
            
                </div>
            </div>

            <div className="App_2">
                <text id="2">
                <h2>Admin login</h2>
                </text>  
                
                <div id="admin_id">
                <input type="text" placeholder="enter admin id" className="ai"></input>
                </div>
                <div id="admin_pass">
                <input type="text" placeholder="enter admin password" className="ap"></input>
                </div>
                <div className="container"> 
                
                <button  id="b2">
                    Login
                </button>
                
            
                </div>
            </div>
            <div>
            
            </div>

        </div>
    );
    }
}
 export default Home;