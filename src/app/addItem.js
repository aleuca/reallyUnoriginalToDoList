let React = require('react');
let css = require('./css/additem.css')

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return(
            <div>
                <form id='add-todo' onSubmit={this.handleSubmit}>
                    <input type='text' required ref='newItem'/>
                    <input type='submit' value='Hit me'/>
                </form>
            </div>
        )
    }

    // custom functions

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
}




module.exports = AddItem