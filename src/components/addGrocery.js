import React, {Component} from 'react'
import './addGrocery.css'

export default class AddGrocery extends Component {
    constructor(props){
        super(props)

      

        this.state = {
            item: '',
            quantity: 0,
            inCart: false,
            imageUrl:''
        }
    }

   handleAdd = e => {
       let { value, name} = e.target
       this.setState({
           [name]: value
       })
   } 

   handleClick = () => {
       let newCart = this.state
       this.props.createGrocery(newCart)
   }

   render() {
       console.log(this.props)
       return (
           <div style={{border: '5px double black', margin: 15, padding: 5}}>
               <input
               type="text"
               name="item"
               value={this.state.item} 
               placeholder="item"
               onChange={this.handleAdd}/>
               <input
               type="number"
               name="quantity"
               value={this.state.quantity} 
               placeholder="quantity"
               onChange={this.handleAdd}
                />
                <input
                type="text"
                name="imageUrl"
                placeholder="image"
                onChange={this.handleAdd}
                value={this.state.imageUrl}/>
                
               <button class="button4" onClick={this.handleClick}>Add to Cart</button>
           </div>
       )
   }
}