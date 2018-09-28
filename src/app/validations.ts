declare var $:any;
export class Validations {
   

    verifyNameInputs(name){

        name  = $.trim(name);

        if(name == undefined || name == "" || name.length == 0){
            return false;
        }else{
            return true;
        }

    }


    validateEmail(email) {

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        
    }
      

  
}

