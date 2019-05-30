import React, {Component} from 'react'
import './grocery.css'

export default class Grocery extends Component {
    constructor(props) {
        super(props)

        this.state = {
           inCart: false
        }
    }

    render() {
        let {grocery} = this.props
        return(
            <div class="items">
                <ul>
                <li>Item: {grocery.item}</li>
                Quantity: {grocery.quantity}, 
                In Cart: {grocery.inCart} </ul>
            
            </div>
        )
    }

}