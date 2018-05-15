let React = require('react');
import { Link } from 'react-router-dom';

class About extends React.Component{
    render() {
        return(
            <div>
                <h2>About page</h2>
                <Link to={'/'}>Home page</Link>
            </div>
            
        );
    }
}

module.exports = About