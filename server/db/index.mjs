import pg from 'pg';
 
const pool = new pg.Pool()
  //console.log(await pool.query('SELECT NOW()'))  // SELECT NOW()
//   console.log(await pool.query('SELECT * FROM restaurants'))  // SELECT * FROM restaurants
 
export const query = (text, params) => pool.query(text, params);