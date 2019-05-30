let id = 1
let list = [
    {
        id: id++,
        item: 'bread',
        quantity: 1,
        inCart: false
    },
    {
        id: id++,
        item: 'pickles',
        quantity: 2,
        inCart: false
    }
]

module.exports = {
    read: (req, res) => res.send(list)
}