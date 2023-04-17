import { app } from './app.js';
import { connectDB } from './data/database.js';
connectDB();
app.listen(process.env.PORT, (req, res) => {
    console.log("Bro, i am listing to you on port number 4000");
})