import express from 'express'
import mongoose, { Schema } from 'mongoose'
const app = express()
import cors from 'cors'
const port = 7000

app.use(express.json())
app.use(cors())

const flowerSchema = new Schema({
    name: String,
    price: Number,
    img: String
});

const flowerModel = mongoose.model('flower', flowerSchema);

app.get('/', async (req, res) => {
    try {
        const flowers = await flowerModel.find({})
        res.send(flowers)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/:id', async (req, res) => {
    try {
        const flowers = await flowerModel.findById(id)
        res.send(flowers)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/', async (req, res) => {
    try {
        const { name, price, img } = req.body
        const flowers = new flowerModel({ name, price, img })
        await flowers.save()
        res.send(flowers)
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const { name, price, img } = req.body
        const flowers = await flowerModel.findByIdAndUpdate(id , { name, price, img })
        res.send(flowers)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const flowers = await flowerModel.findByIdAndDelete(id)
        res.send(flowers)
    } catch (error) {
        res.send(error.message)
    }
})

mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected !'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})