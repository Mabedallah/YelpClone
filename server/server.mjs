import 'dotenv/config'
import express from 'express';
import morgan from 'morgan';
import {query} from './db/index.mjs';
import cors from 'cors';



// Create an Express app
const app = express();
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());


// Define the port to listen on
const port = process.env.PORT || 3005;


// Define a route for the root URL ("/")
 app.get('/', async (req, res) => {
  //res.send('Hello World!!!!');
  const results =  await query('SELECT * FROM restaurants'); // execute a query
  console.log(results.rows);
  res.status(200).json({
    status: 'success',
    data: results.rows,
  });
});


// Define a route for getting all restaurants the "/api/v1/restaurants" URL
app.get('/api/v1/restaurants', async(req, res) => {

  try {
    const results =  await query('SELECT * FROM restaurants'); // execute a query
    console.log(results.rows);
    res.status(200).json({
    resultsLength: results.rows.length, 
    message: 'All restaurants retrieved successfully',
    status: 'success',
    data: results.rows,
  });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
});


// Define a route for a specific restaurant the "/api/v1/restaurants/:restaurantid" URL
app.get('/api/v1/restaurants/:restaurantid', async(req, res) => {
try {
  const results =  await query("SELECT * FROM restaurants where id = $1", [req.params.restaurantid]); // execute a query
  if(results.rows.length === 0){
    res.status(404).json({
      status:"error",
      message:"restaurant not found"
    });
  }else
  res.status(200).json({
    status:"success",
    data:{
      restaurant:results.rows,
    }
  });
} catch (error) {
  console.log(error.message);
  res.status(500).json({
    status:"success",
    message: error.message
  });
}
});


// Define a route for Adding restaurant "/api/v1/restaurant" URL
app.post('/api/v1/restaurant', async(req, res) => {
  try {
    const results = await query('INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *',
     [req.body.name, req.body.location, req.body.price_range]);
  res.status(201).json({
    status:"added sucessfully",
    data:{
      restaurant:results.rows,
    }
  });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status:"error",
      message: error.message
    });
  }
});

// Define a route for update restaurant "/api/v1/restaurant/:restaurantid" URL
app.put('/api/v1/restaurant/:restaurantid', async(req, res) => {
  try {
    const results = await query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *",
     [req.body.name, req.body.location, req.body.price_range, req.params.restaurantid]); // execute a query
    res.status(200).json({
      status:"updated sucessfully",
      data:{
        restaurant:results.rows,
      }
  });
  } catch (error) {
    res.status(500).json({
      status:"error",
      message: error.message
    });
  }
  
});

// Delete restaurant "/api/v1/restaurant/:restaurantid" URL
app.delete("/api/v1/restaurant/:restaurantid", async(req, res) => {
  try {
    const results = await query("DELETE FROM restaurants WHERE id = $1", [req.params.restaurantid]); //
    console.log(req.params.restaurantid);
    res.status(204).json({
    status:"deleted sucessfully"
  });
  } catch (error) {
    res.status(500).json({
      status:"error",
      message: error.message
    });
  }
  
});



// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});