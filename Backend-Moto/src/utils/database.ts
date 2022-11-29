import mongoose from 'mongoose';

export class Database {
    homer: string = 'HomerAdmin';
    host:string = 'localhost';
    port: string = '27017';

    constructor (){
        this.conectar();
    }

   async conectar (){
      await  mongoose.connect(`mongodb://${this.host}:${this.port}/${this.homer}`)
      console.log('Ya se conecto mongodb oka');
       /* .then(() => {
            console.log('Ya se conecto');
        })
        .catch ((error) => {
            console.log(error);
        }) ;*/
    }
}