const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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
        index:{
          unique: true,
          dropDups: true,
        }
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

  Autore.pre('save', async function(next){
    const user = this
    try {
      const salt = await bcrypt.genSalt(10) 
      const hash = await bcrypt.hash(user.password, salt)
      user.password= hash
      next()
    } catch (error) {
      console.log(error);
    }
  })
  module.exports = mongoose.model('Autore', Autore, 'Autori');