import React, {Component} from 'react';
import axios from 'axios'
import './mainList.css'
import Grocery from './grocery';
import AddGrocery from './addGrocery';

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

createGrocery = addGrocery => {
    axios.post('/api/groceries', addGrocery).then(res => {
        this.setState({
            groceries: res.data
        })
    }).catch(err => console.log(err))
}

updateGrocery = grocery => {
    console.log(grocery)
    axios.put(`/api/groceries/${grocery.id}`, grocery)
    .then(res => this.setState({ groceries: res.data}))
    .catch(err => console.log(err))
}

deleteGrocery = id => {
    axios.delete(`/api/groceries/${id}`)
    .then(res => this.setState({groceries: res.data}))
    .catch(err=> console.log(err))
}


   
    render () {
        return (
        <div className="mainList">
            <header class="listName">CALEB'S LISTR</header>
            {this.state.groceries.map(grocery => {
                return (
                    <Grocery
                        key={grocery.id}
                        grocery={grocery}
                        updateGrocery={this.updateGrocery}
                        deleteGrocery={this.deleteGrocery}></Grocery>
                )
            })}
            <div> <AddGrocery createGrocery={this.createGrocery}/> </div>
            
            
            </div>
            
        )
    }
}


 // <p>
            //     <input type="checkbox"/> WHATS GOOD BOI?!
            //     {/* {this.props.items.title} */}
            // </p>