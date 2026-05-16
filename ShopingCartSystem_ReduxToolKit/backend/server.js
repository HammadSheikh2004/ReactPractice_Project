import connectDB from './config/database.js';
import app from './src/app.js';

connectDB();
app.listen(process.env.PORT, () => {
    console.log("Express App Run!")
    console.log("Swagger: http://localhost:3000/api-docs");
})