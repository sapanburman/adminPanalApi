const mongoose=require('mongoose');
const dbConfig=require('./config/config')
class Database{
    constructor(){
        this._connect();
    }

    _connect(){
        mongoose.connect(`${dbConfig.database.dbUrl}/${dbConfig.database.dbName}`,{ useNewUrlParser: true,useUnifiedTopology: true  })
        .then(() => {
          console.log('Database connection successful')
        })
        .catch(err => {
          console.error('Database connection error')
        });
    }
}

module.exports=new Database();