import React from 'react';
import TodoItem, {Todo} from "./TodoItem";

class Todos extends React.Component<TodosProps> {
    public render(): React.ReactNode {
        return this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

interface TodosProps {
    todos: Todo[];
    markComplete: (id: string) => void;
    delTodo: (id: string) => void;
}

export default Todos;
