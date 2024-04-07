require('dotenv').config()

 const mongodb_url=process.env.mongodb_url

const SECRET_KEY=process.env.SECRET_KEY

// PORT => for System port number
// port => if system port not working use this inside .env file 

  const port=process.env.PORT|| process.env.port



 module.exports  ={mongodb_url , port,SECRET_KEY};
   