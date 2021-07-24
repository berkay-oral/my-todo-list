import React, { Component } from 'react'
import './List.css'
export class Lists extends Component {

    constructor(props){
        super(props);
        this.state = {            
        }
    }
    render() {
        const props = this.props;
        return (
            <div>
                <ul  >
                 {this.props.todoList.map((item, i) => {                
                     return(
                             <li id={i}   key={i}  >
                                  {item}  
                                   <i className="fa fa-check" ></i>
                                   <i onClick={() => this.props.deleteTask(i)} className="fa fa-times" ></i>
                             </li>     
                            )
                 })}
                 </ul>
                            <button className="deleteButton" onClick={this.props.deleteAllTask}> DELETE </button>
            </div>
        )
    }
}
export default Lists;


 