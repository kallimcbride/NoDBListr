import React, {Component} from 'react';
import axios from 'axios'
import './mainList.css'
import Grocery from './grocery';

export default class MainList extends Component {
    constructor(){
        super();

        this.state = {
            groceries: []
        }

    }



    //    crossOff = () => {
//        return{
//            background: 'white',
//            padding: '15px',
//            borderBottom: '3px solid black dotted', 
//            textDecoration: this.props.items.inCart ? 
//            'line-through' : 'none'
//        }
//    }

componentDidMount() {
    axios.get('/api/groceries').then((res) => {
       console.log(res.data)
    this.setState ({
            groceries: res.data
        })
    }).catch(err => console.log('We aint found ish', err))
}
   
    render () {
        return (
        <div className="mainList">
            {this.state.groceries.map(grocery => {
                return (
                    <Grocery
                        key={grocery.id}
                        grocery={grocery}></Grocery>
                )
            })}
            </div>  
        )
    }
}


 // <p>
            //     <input type="checkbox"/> WHATS GOOD BOI?!
            //     {/* {this.props.items.title} */}
            // </p>