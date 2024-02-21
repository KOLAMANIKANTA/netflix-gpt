export const validateData=(email,password)=>{

    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Weak Password";
    return null;

}

export const validateName=(name)=>{

    const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);

    if(!isNameValid) return "Username is not valid";
    return null;

}