const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(db => {
    console.log('DB Connected')
}).catch(err => {
    console.error('Error Connected DB', err)
})
