import React, {Component} from 'react';

export default class MainList extends Component {
   crossOff = () => {
       return{
           background: 'white',
           padding: '15px',
           borderBottom: '3px solid black dotted', 
           textDecoration: this.props.items.inCart ? 
           'line-through' : 'none'
       }
   }
   
    render () {
        <div>
            <p>
                <input type="checkbox"/>
                {this.props.items.title}
            </p>
        </div>
    }
}