export class CustomErrorHandler {


    static ConnectionError(error: any){

        if(!this.internetConnection()){
          return'No internet connection'
          
        }
    
        else if(error.status==404){
    
          return'Endpoint not found'
    
        }
    
        else if(error.status==500){
    
            return'Internal server error'
      
          }
          
        else if(error.status==400){
            let message =  JSON.parse(error._body)

            if (message.sql){
              return message.sql.Message
            }
            return'Bad request'
      
          }else {
    
          return 'Unknown Error'
    
        }
    
      }

    static internetConnection(){
        if (navigator.onLine) {
          return true
        } else {
          return false
        }
      }
}
