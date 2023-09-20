export function emailValidation(userdata) {
    //^[a-zA-Z0-9._-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
    let errors = {};
    console.log("validationJs email"+userdata);


    if (!/^[a-zA-Z]+$/.test(userdata)) {
        errors.emailerr = 'Debe contener solo letras'
    }

    if (userdata?.length < 3) {
        errors.emailerr = 'Debe ser mayor que 3 caracteres'
    }

    return errors;
}

export function passwordValidation(userdata) {
    const passwordLengthPattern = /^.{6,10}$/; // Longitud de la contraseña (6 a 10 caracteres)
    const passwordDigitPattern = /\d/; // Al menos un dígito en la contraseña


    let errors = {};


    if (!passwordLengthPattern.test(userdata)) {
        errors.passerr = "La contraseña debe tener entre 6 y 10 caracteres";
    }

    if (!passwordDigitPattern.test(userdata)) {
        errors.passerr = "La contraseña debe contener al menos un número";
    }

    return errors;
}