let React = require('react');
let ReactDOM = require('react-dom');
let css = require('./css/index.css')
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// modules
let TodoItem = require('./todoItem');
let AddItem = require('./addItem');
let About = require('./about');


class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch> 
                    <Route exact path='/' component={TodoComponent}></Route>
                    <Route exact path='/about' component={About}></Route>
                </Switch>
            </BrowserRouter>                
        );
    }
}



// create component

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["wash up", "eat some cheese", "work out the cheese"]
        }

        this.onDelete = this.onDelete.bind(this)
        this.onAdd = this.onAdd.bind(this)
    }

    render () {
        let todos = this.state.todos;
        let that = this;
        todos = todos.map(function(item, index){
             return(
                 <TodoItem item={item} key={index} onDelete={that.onDelete} />
             )
        });

    // // setstate example
    // render () {
    //     let ager = setTimeout(function(){
    //         this.setState({
    //             age:35
    //         })
    //     }.bind(this), 5000)


        return (
            <div id='todo-list'>
                <Link to={'/about'}>About page</Link>
                <p>the busiest people have the most leasure</p>
                <p>{this.state.age}</p>
                <ul>
                    {todos}
                </ul>
                <AddItem onAdd= {this.onAdd}/>
            </div>
        );
    }//render


    // custom functions
    onDelete(item) {
        let updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        })

        this.setState({
            todos:updatedTodos
        })
    }

    onAdd(item) {
        let updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos:updatedTodos
        })
    }


    // lifecycle functions

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
        //any grabbing of external data
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
};





// put component into HTML page

ReactDOM.render(<App/>, document.getElementById('todo-wrapper'));



// For reference below



















// class TodoComponent extends React.Component{
//     render () {
//         return (
//             <div>
//                <p><strong> Cheese Name</strong> {this.props.cheese.name}</p>
//                <p><strong> Cheese Smell</strong> {this.props.cheese.smellfactor}</p>
//                <p><strong> Cheese Age</strong> {this.props.cheese.age}</p>
//             </div>
//         );
//     }
// };

// let myCheese = {name: "Gouda", age: 13, smellfactor: "extreme"}

// // put component into HTML page

// ReactDOM.render(<TodoComponent mssg='I like cheese' cheese={myCheese}/>, document.getElementById('todo-wrapper'));