import toast from 'react-hot-toast'


export function validateField(field,values){
    let error={};
   if(field == 'username'){
        error = usernameVerify({},values);
   }else if(field == 'password'){
     error = passwordVerify({},values)
   }else if(field == 'confirm_password'){
    console.log(values)
      error = passwordVerify({},values)

      if((values.password != values.confirm_password)){
        error = toast.error("Password mismatch...!")
      }
   }else if(field == 'registerPage'){
    error = passwordVerify({},values)
    error = usernameVerify(error,values);
    error = emailVerify(error,values)
   }else if(field == 'profilePage'){
    error = emailVerify({},values);
    error = addressVerify(error,values);
    error = nameVerify(error,values);
    error = mobile(error,values)
   }
    
    return error
}

function addressVerify(error,values){
   if(!values.address){
    toast.error('Address can')
   }
}
function emailVerify(error={},values){
    const specialCharacters =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(specialCharacters.test(values.email))
    if(!values.email){
        error.email = toast.error('Email is required...!')
    }else if(values.email.includes(" ")){
        error.email = toast.error('Email is Invalid...!')
    }else if(!specialCharacters.test(values.email)){
        error.email = toast.error('Email is Invalid last...!')
    }
}

function passwordVerify(error = {},values){
    const specialCharacters =  /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;


    if(!values.password){
        error.message = toast.error("password required.")
    }else if(values.password.includes(" ")){
        error.message = toast.error("password cannot be empty")
    }else if(values.password.length < 4 ){
        error.message = toast.error("password must have more than 4 characters")
    }else if(!specialCharacters.test(values.password)){
        error.message = toast.error("password must have special character")
    }

    return error
}



function usernameVerify(error = {},values){
    if(!values.username){
        error.message = toast.error("username required.")
    }else if(values.username.includes(" ")){
        error.message = toast.error("username cannot be empty")
    }

    return error
}