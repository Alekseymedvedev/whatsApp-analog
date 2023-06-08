import express from 'express'


const app = express()

app.get('/api', (req, res) => {
    res.status(200).json('sever work')
})

async function startApp() {
    try {
        app.listen(80, () => console.log('SERVER STARTED ON PORT ' + 80))
    } catch (e) {
        console.log(e)
    }
}

startApp()