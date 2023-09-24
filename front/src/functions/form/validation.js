export function emailValidation(userdata) {
    //^[a-zA-Z0-9._-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@?$/;
   
    let errors = {};
    //console.log("validationJs email"+userdata);

    if (userdata?.length < 3) {
        errors.email = 'Debe ser mayor que 3 caracteres'
    }

    if (emailRegex.test(userdata)) {
        errors.email = 'Formato de email no valido'
    }

    return errors;
}

export function passwordValidation(userdata) {
    const passwordLengthPattern = /^.{6,10}$/; // Longitud de la contraseña (6 a 10 caracteres)
    const passwordDigitPattern = /\d/; // Al menos un dígito en la contraseña


    let errors = {};


    if (!passwordLengthPattern.test(userdata)) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }

    if (!passwordDigitPattern.test(userdata)) {
        errors.password = "La contraseña debe contener al menos un número";
    }

    return errors;
}

const validations = (userdata) =>
{
    const emailErrors = emailValidation(userdata.email);
    const passwordErrors = passwordValidation(userdata.password);

    // Combina los errores de email y contraseña en un solo objeto de errores.
    return {
        ...emailErrors,
        ...passwordErrors,
    };
}

export default validations;