const { Pool } = require('pg');
const pool = new Pool({
 host: 'localhost',
 user: 'postgres',
 password: '1234',
 database: 'likeme',
 allowExitOnIdle: true,
 port: 5433,
});

const obtenerPost = async () => {
const {rows} = await pool.query("SELECT * FROM posts;");
 return rows; 
};

const escribirPost = async (titulo, url, descripcion) => {
    const consulta =
      "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0)";
    const values = [titulo, url, descripcion];
    const result = await pool.query(consulta, values);
    console.log("Post Agregado", result);
  };

obtenerPost()
module.exports = {obtenerPost, escribirPost};
