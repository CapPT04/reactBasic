import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo.js";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        ListTodo: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Doing homework' },

        ],

        editTodo: {}
    }

    handleDeleteTodo = (todo) => {
        this.setState({
            ListTodo: this.state.ListTodo.filter(item => item.id !== todo.id)
        });

        toast.success('Delete success!')
    }

    addNewTodo = (todo) => {
        this.setState({
            ListTodo: [...this.state.ListTodo, todo]
        })
        toast.success("Wow so easy!");

    }

    handleEditTodo = (todo) => {

        let { editTodo, ListTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...ListTodo];
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);


            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                ListTodo: listTodosCopy,
                editTodo: {}

            })
            toast.success('Edit successfully')
            return;
        }

        this.setState({
            editTodo: todo
        })

        return;

    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCOpy = { ...this.state.editTodo };
        editTodoCOpy.title = event.target.value;
        this.setState({
            editTodo: editTodoCOpy
        })
    }



    render() {


        let { ListTodo, editTodo } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <>
                <p>
                    Simple TODO Apps with React.js (CapPT)
                </p>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.addNewTodo} />

                    <div className="list-todo-content">
                        {ListTodo && ListTodo.length > 0 && ListTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>

                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>

                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title}
                                                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                    ></input>
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}

                                    > Delete</button>
                                </div>
                            )
                        })}



                    </div>

                </div>

            </>
        )
    }
}

export default ListTodo