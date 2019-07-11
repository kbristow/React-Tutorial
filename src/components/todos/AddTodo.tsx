import * as React from "react";

class AddTodo extends React.Component<AddTodoProps> {

    public state = {
        title: "",
    };

    public render(): React.ReactNode {
        return (
            <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input type="text" name="title" placeholder="Add Todo ..." style={{flex: 10}} value={this.state.title}
                       onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex: 1}}/>
            </form>
        )
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({[event.target.name]: event.target.value});
    };

    private onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    }
}

interface AddTodoProps {
    addTodo: (todoTitle: string) => void;
}

export default AddTodo;
