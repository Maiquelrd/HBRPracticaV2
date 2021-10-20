jQuery.validator.addMethod('lettersonly', function (value, element) {
    return this.optional(element) || /^[a-z áãâäàéêëèíîïìóõôöòúûüùçñ]+$/i.test(value);
}, "Letters and spaces only please");

var culture = $("#currentLang").text();

if (culture == "es") {
    jQuery.extend(jQuery.validator.messages, {
        required: "El campo es requerido",
        email: "El campo debe contener un email valido",
        url: "El campo debe contener un URL valido.",
        lettersonly: "El campo no debe contener numeros",
        date: "El campo debe contener una fecha valida.",
        number: "El campo debe contener un numero valido",
        digits: "El campo debe contener digitos",
        creditcard: "El campo debe contener una tarjeta valida",
        equalTo: "El campo debe ser igual",
        maxlength: jQuery.validator.format("El campo no debe contener mas de {0} caracteres."),
        minlength: jQuery.validator.format("El campo debe contener al menos {0} caracteres."),
        rangelength: jQuery.validator.format("El campo debe tener entre {0} y {1} caracteres."),
        range: jQuery.validator.format("Por favor introduzca un valor entre {0} y {1}."),
        max: jQuery.validator.format("Por favor introduzca un valor menor a {0}."),
        min: jQuery.validator.format("Por favor introduzca un valor mayor qué {0}.")
    });
}

