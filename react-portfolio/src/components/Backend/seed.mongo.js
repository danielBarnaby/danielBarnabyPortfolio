const mongoose = require("mongoose");
require('dotenv').config();
const User = require('./models/user.model')


const options = {
useNewUrlParser: true, 
useUnifiedTopology: true
}

mongoose.connect(process.env.MONGO_URI, options)

const connectionDB = mongoose.connection

connectionDB.once('open', () => {
    console.log('DB is CONNECTED...')
})

const UserSeeder = [
    {
       name: 'alex',
       email: 'alex@gmail.com',
       message: [{
        id: 0,
        userMessage: "Hello! I'm the first message."
       }
    ]
    }
]


User.deleteMany()
    .then(() => {
        console.log('DB is EMPTY!!')
    });

User.create(UserSeeder)
    .then((user) => {
        // console.log(user)
        console.log('DB has been SEEDED!!')
    })
    .catch(err => {
        console.log(err, 'Problem w/ seeder?!?!')
    });

setTimeout (() => {
    connectionDB.close('DB has CLOSED its doors...')
    console.log()
}, 3000)


