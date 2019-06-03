import React, {Component} from 'react'
import './editList.css'

export default class EditList extends Component {
    constructor(props){
        super(props)

        let { item, quantity, id } = props.item

        this.state = {
            item, 
            quantity,
            id
        }
    }

    handleEdit = e => {
        let {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let updatedCart = {...this.props.groceries, ...this.state}
        this.props.updateGrocery(updatedCart)
        this.props.toggleEdit()
    }

    render(){
        console.log(this.props)
        return (<div style={{border: '3px dotted black', margin: 15, display: 'flex', flexDirection: 'column'}}>
        <input 
          type="text"
          name="item"
          value={this.state.item}
          placeholder="item"
          onChange={this.handleEdit}/>
        <input 
          type="number"
          name="quantity"
          value={this.state.quantity}
          placeholder="quantity"
          onChange={this.handleEdit}/>
          <input
                type="text"
                name="imageUrl"
                placeholder="image"
                onChange={this.handleEdit}
                value={this.state.imageUrl}/>   
        <button class="button4" onClick={this.handleClick}>Update Grocery</button>
        </div>
        )
    }
}