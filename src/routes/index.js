const HomeRouter = require('./HomeRouter')
const InserRouter = require('./InsertRouter')
const DetailRouter = require('./DetailRouter')
const UpdateRouter = require('./UpdateRouter')
function route(app){
    app.use('/insert',InserRouter)
    app.use('/detail',DetailRouter)
    app.use('/update',UpdateRouter)
    app.use('',HomeRouter)
    
}

module.exports = route;