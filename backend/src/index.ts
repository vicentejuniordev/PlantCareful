import app from "./app/index.js";

const port = process.env.PORT
app.listen(8000, ()=>{
    console.log(`Server is running in port ${port}`)
})