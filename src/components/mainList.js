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
            <header class="listName">Caleb's Listr</header>
            {this.state.groceries.map(grocery => {
                return (
                    <Grocery
                        key={grocery.id}
                        grocery={grocery}
                        updateGrocery={this.updateGrocery}
                        deleteGrocery={() => this.deleteGrocery(grocery.id)}></Grocery>
                )
            })}
            <div> <AddGrocery createGrocery={this.createGrocery}/> </div>
            
            
            </div>
            
        )
    }
}
