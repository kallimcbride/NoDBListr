import React, {Component} from 'react'
import './grocery.css'
import EditList from './editList'

export default class Grocery extends Component {
    constructor(props) {
        super(props)

        this.state = {
           inCart: false
        }
    }

    toggleEdit = () => {
        this.setState({
            inCart: !this.state.inCart
        })
    }

    render() {
        let {grocery} = this.props
        console.log(this.props)
        return(
            <div class="items">
                {this.state.inCart ?
                <EditList
                item={grocery}
                updateGrocery={this.props.updateGrocery} />
                :
                <ul>
                <li>Item: {grocery.item}</li>
                Quantity: {grocery.quantity}, 
                In Cart: {grocery.inCart} </ul>
                }
                {this.state.inCart ?
                <button onClick={this.toggleEdit}>Cancel</button>
                :
                <button onClick={this.toggleEdit}>Edit</button>
                }
                <button onClick={this.props.deleteGrocery}>Delete</button>
            </div>            
        )
    }
}