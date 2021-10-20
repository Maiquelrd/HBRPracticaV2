$(function () {
    var $registerForm = $("#createForm");
    if ($registerForm.length) {
        $registerForm.validate()
    }

    var NameRules = { Categoria_Nombre: {} };
    NameRules.Categoria_Nombre = Rules.Required(NameRules.Categoria_Nombre);
    NameRules.Categoria_Nombre = Rules.NotNumber(NameRules.Categoria_Nombre);
    NameRules.Categoria_Nombre = Rules.MaxLenght(NameRules.Categoria_Nombre, 30);

    var DescriptionRules = { Categoria_Descripcion: {} };
    DescriptionRules.Categoria_Descripcion = Rules.MaxLenght(DescriptionRules.Categoria_Descripcion, 50);

    Validator.addRules(NameRules);
    Validator.addRules(DescriptionRules);
},

)