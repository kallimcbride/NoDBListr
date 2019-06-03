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
                <li style={{borderBottom: '3px solid black'}}>Item: {grocery.item}
                    </li>
                     <ul>Quantity: {grocery.quantity}</ul> 
                    <ul>In Cart: {grocery.inCart} yes</ul>
                     </ul>
                }
                {this.state.inCart ?
                <button class="button1" onClick={this.toggleEdit}>Cancel</button>
                :
                <button class="button2" onClick={this.toggleEdit}>Edit</button>
                }
                <button class="button3" onClick={this.props.deleteGrocery}>Delete</button>
            </div>            
        )
    }
}