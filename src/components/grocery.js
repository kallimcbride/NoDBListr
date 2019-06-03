import React, {Component} from 'react'
import './grocery.css'
import EditList from './editList'
import Button from './stateless/button'

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
            <div className="items">
                {this.state.inCart ?
                <EditList
                toggleEdit={this.toggleEdit}
                item={grocery}
                updateGrocery={this.props.updateGrocery} />
                :
                <ul>
                <li style={{borderBottom: '3px solid black'}}>Item: {grocery.item}
                    </li>
                    <img src={grocery.imageUrl} alt="" width="125" height="100"/> 
                     <ul>Quantity: {grocery.quantity}</ul>
                    <ul>In Cart: {grocery.inCart} yes</ul>
                    
                     </ul>
                } <div>
                {this.state.inCart ?
                <Button name="Cancel" func={this.toggleEdit}/> 
                :
                <Button name="Edit" func={this.toggleEdit}/> 
                }
                <button class="button3" onClick={this.props.deleteGrocery}>Delete</button>
                </div>
            </div>            
        )
    }
}