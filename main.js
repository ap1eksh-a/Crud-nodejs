import express from 'express';
const app = express();
const port =4000;
import route from './routes/routes.js';
import path from 'path';
import connectDB from './connectDB/connectDB.js';
import bodyParser from 'body-parser';
import itemRoutes from './routes/itemRoutes.js';

//connection for database
connectDB();

//body-parser
app.use(bodyParser.urlencoded({extended:false})); 


//setup for static file
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', itemRoutes);
//setup for ejs template file
app.set('view engine','ejs');
app.set('views','./views');


//routes
app.use('/',route);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});