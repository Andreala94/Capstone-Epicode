const moongose = require('mongoose');

const Autore = new mongoose.Schema(

    {
      name: {
        type: String,
        require: true,
       
      },
      cognome: {
        type: String,
        require: true,
        
      },
      password: {
        type: String,
        require: true,
       
      },
      email: {
        type: String,
        require: true,
       
      },
  
      avatar: {
        type: String,
        require: true,
        
      },
      dob: {
        type: String,
        require: true,
        
      }
      
  
    },
    {
      timestamps: true,
      strict: true,
    }
  
  )

//   module.exports = mongoose.model('Auth', 'Authors');