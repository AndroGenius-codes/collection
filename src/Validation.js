const Validation = forms => {
    let errors = {};

    if(!forms.firstName){
        errors.firstName = "first name required"
      }
      if(!forms.lastName){
        errors.lastName = "last name required"
      }
      if(!forms.email){
        errors.email = "please input emaill address"
      }else if (!/\S+@\S+\.\S+/.test(forms.email)){
        errors.email="invalid emails please use the correct format"
      }
      if(!forms.password){
        errors.password = "password field is required"
      }else if(forms.password.length < 6) {
        errors.password = "password can't be less than 6 characters"
      }
      
      return errors;
};

export default Validation;