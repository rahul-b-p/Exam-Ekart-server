const jsonServer = require('json-server')

const router =jsonServer.router("db.json")
const middleware =jsonServer.defaults()
const mediaPlayerServer =jsonServer.create()

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


PORT = 3000 || process.env.PORT   


mediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number ${PORT}`);
})