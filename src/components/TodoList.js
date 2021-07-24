import React, { Component } from 'react'
import './TodoList.css'
import Alert from './Alert';
import Lists from './Lists';
// import Alert from './Alert';
 class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
                       todoList : ["Run" , "Jump", "Play"],
                       item     : "", 
                       isAlert  : false 
                     }
    }

    changeInputValue  =  e => {
                     this.setState({ item : e.target.value })//input tan gelen değeri itema attık
    }

    submitInputValue = e => {
                    e.preventDefault();
                    let text = this.state.item;//item dan gelen değeride text değişkenine attık

        if(text !== ''){

                    let newList = this.state.todoList.concat(text);//todoList dizine text imi birleştiriyorum
                    // ve newList içerisine atıyorum (böylese yeni listemiz oluşuyor)
                    this.setState({
                    todoList: newList, //todoList dizisini içerisine yeni neList dizimizi aktarıyoruz
                    item : ""
                    })
        }
        else{
                 this.setState( {isAlert : !this.state.isAlert} )
            }      
    } 

    closeAlert = () => {
           this.setState({ isAlert : !this.state.isAlert  })
    }
       
    deleteTask = index => {
            const newList = this.state.todoList.slice();
            newList.splice(index, 1);
            this.setState({todoList : newList})
    }

    deleteAllTask = listItems => {
            const cleanList = this.state.todoList.filter(item => item.id !== listItems.id);
            this.setState({ todoList :  cleanList })
    }

    showInput = () => {
            this.setState({ inputAni : true })
    }
    hiddenInput = () => {
            this.setState({ inputAni : false })
    }

    render() {
        const  {todoList, item} = this.state;
        return ( <>
                    <form className="form-container"  >
                        <input style={{color:"rgb(38, 64, 121)"}}  type="text" onChange={this.changeInputValue}  value={item}  />
                        <button className="addButton"  type="submit" onClick={this.submitInputValue}>ADD</button>
                    </form>
                             <Lists
                               todoList={this.state.todoList}
                               deleteTask={this.deleteTask}
                               deleteAllTask={this.deleteAllTask}
                             />

                             <Alert
                             isAlert = {this.state.isAlert}
                             closeAlert ={this.closeAlert}
                             />
             </>
        )
    }
}

export default TodoList;
