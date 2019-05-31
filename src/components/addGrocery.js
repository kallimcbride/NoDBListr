import React, {Component} from 'react'
import './addGrocery.css'

export default class AddGrocery extends Component {
    constructor(props){
        super(props)

      

        this.state = {
            item: '',
            quantity: 0,
            inCart: false
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
           <div style={{border: '3px dotted black', margin: 15, padding: 5}}>
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
               name="inCart"
               value={this.state.item} 
               placeholder=""
               onChange={this.handleAdd}
                />
               <button class="button4" onClick={this.handleClick}>Update Cart</button>
           </div>
       )
   }
}