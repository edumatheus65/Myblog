const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json([
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"            
          },
          {
            "id": 2,
            "title": "qui est esse"            
          },
    ])
})

app.listen(4000, () => {
    console.log('listeing for requests on port 4000')
})
