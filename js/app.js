const App = React.createClass({
    getInitialState: function () {
        return {
            todoTitle: 'todos',
            todoItems: []
        }
    },

    addItem: function () {

    },

    render: function () {
        return <div>
            <h1 className="text-center text-danger">{this.state.todoTitle}</h1>
            <AddTodoItem />
            <Todolist />
        </div>
    }
});

const AddTodoItem = React.createClass({
    render: function () {
        return <div className={this.props.className}>AddTodoItem
        </div>
    }
});

const Todolist = React.createClass({
    render: function () {
        return <div className={this.props.className}>Todolist
        </div>
    }
})

ReactDOM.render(<App/>, document.getElementById('content'));