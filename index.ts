import http from 'http'
import app from './app'

const server = http.createServer(app)
const PORT = process.env.PORT;


server.listen(PORT, () => { 
    console.log("Server running at PORT: ", PORT); 
  }).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });