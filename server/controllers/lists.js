let id = 1
let list = [
    {
        id: id++,
        item: 'bread',
        quantity: 1,
        inCart: true
    },
    {
        id: id++,
        item: 'pickles',
        quantity: 2,
        inCart: true 
    }
]

module.exports = {
    read: (req, res) => res.send(list),
    create: (req, res) => {
    let addGrocery = req.body
    addGrocery.id = id++
    list.push(addGrocery)
    res.send(list)
    },
    update: (req, res) => {
        console.log(req.body)
        let {id}= req.params
        console.log(req.params)
        let updatedCart = req.body
        updatedCart.id = id

        let index = list.findIndex(grocery => +grocery.id === +id)
        list.splice(index, 1, updatedCart)
        console.log(list)
        res.send(list)
    },
    delete: (req, res) => {
        let {id} =req.params
        let index= list.findIndex(grocery => +grocery.id === +id)
        list.splice(index, 1)
        res.send(list)
    }
}



