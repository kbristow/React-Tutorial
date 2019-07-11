import React, {CSSProperties} from 'react';

class TodoItem extends React.Component<TodoItemProps> {
    public render(): React.ReactNode {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>

            </div>);
    }

    private getStyle = (): CSSProperties => {
        return {
            background: "#f4f4f4",
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        };
    };
}

interface TodoItemProps {
    todo: Todo;
    markComplete: (id: string) => void;
    delTodo: (id: string) => void;
}

export interface Todo {
    id: string,
    title: string,
    completed: boolean
}

const btnStyle: CSSProperties = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '6px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
};

export default TodoItem;
