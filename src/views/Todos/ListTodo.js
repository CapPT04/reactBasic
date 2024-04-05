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

        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            ListTodo: [...this.state.ListTodo, todo]
        })
        toast.success("Wow so easy!");

    }

    render() {
        let { ListTodo } = this.state;
        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />

                <div className="list-todo-content">
                    {ListTodo && ListTodo.length > 0 && ListTodo.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                <span>{index + 1} - {item.title}</span>
                                <button className="edit"> Edit</button>
                                <button className="delete"> Delete</button>
                            </div>
                        )
                    })}



                </div>

            </div>
        )
    }
}

export default ListTodo