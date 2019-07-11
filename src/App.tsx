import React from 'react';
import './App.css';
import Todos from "./components/todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/todos/AddTodo";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/pages/About";
import {Todo} from "./components/todos/TodoItem";
import Axios from "axios";


class App extends React.Component {

    public state: { todos: Todo[] } = {
        todos: []
    };

    public render(): React.ReactNode {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path={"/"} render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete}
                                       delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>
                        <Route path={"/about"} component={About}/>
                    </div>
                </div>
            </Router>
        );
    }

    public async componentDidMount(): Promise<void> {
        let axiosResponse = await Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
        this.setState({todos: axiosResponse.data});
    }

    private markComplete = (id: string) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };

    private delTodo = (id: string) => {
        this.setState({
            todos: this.state.todos.filter(todo => {
                return todo.id !== id;
            })
        })
    };

    private addTodo = async (title: string) => {
        let axiosResponse = await Axios.post("https://jsonplaceholder.typicode.com/todos", {
            title,
            completed: false,
        });
        this.setState({
            todos: [...this.state.todos, axiosResponse.data]
        })
    };
}

export default App;
