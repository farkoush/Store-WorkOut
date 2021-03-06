export const validate = (data,type) => {
    let errors = {};



    if (!data.email) { 
        errors.email = "Emailis required" 
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)) {
         errors.email = "Email is invalid" 
    }
    else {
         delete errors.email 
    }

    if(!data.password){
        errors.password = "Password is required"
    }
    else if (data.password.length < 6){
        errors.password = "Password must be more than 6 characters"
    }
    else{
        delete errors.password
    }

    if (type === 'signup'){
        if (!data.name.trim()) { 
            errors.name = "Name is required" 
        }
        else { 
            delete errors.name
        }

        if (!data.confirmPassword){
            errors.confirmPassword = "Please confirm the password"
         }
        else if (data.confirmPassword !== data.password){
            errors.confirmPassword = "Password is not match"
        }
        else {
            delete errors.confirmPassword
        }
    }
    return errors;
}