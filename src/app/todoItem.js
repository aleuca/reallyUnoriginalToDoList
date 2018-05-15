let React = require('react');
let css = require('./css/todoitem.css')



// create item component
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    render() {
        return (
            <li>
                <div className='todo-item'>
                    <span className='item-name'>{this.props.item}</span>
                    <span className='item-remove' onClick={this.handleDelete}> x</span>
                </div>
            </li>
        )
    }

      // custom functions
      handleDelete() {
        this.props.onDelete(this.props.item)
    }
}

module.exports = TodoItem