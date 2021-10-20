$(function () {
    var $registerForm = $("#createForm");
    if ($registerForm.length) {
        $registerForm.validate()
    }

    var NameRules = { Producto_Nombre: {} };
    NameRules.Producto_Nombre = Rules.Required(NameRules.Producto_Nombre);
    NameRules.Producto_Nombre = Rules.NotNumber(NameRules.Producto_Nombre);
    NameRules.Producto_Nombre = Rules.MaxLenght(NameRules.Producto_Nombre, 30);

    var DescriptionRules = { Producto_Descripcion: {} };
    DescriptionRules.Producto_Descripcion = Rules.MaxLenght(DescriptionRules.Producto_Descripcion, 50);

    var PriceRules = { Producto_Precio: {} };
    PriceRules.Producto_Precio = Rules.Required(PriceRules.Producto_Precio);
    PriceRules.Producto_Precio = Rules.Number(PriceRules.Producto_Precio);

    var DateRules = { Producto_FechaCreado: {} };
    PriceRules.Producto_FechaCreado = Rules.Required(DateRules.Producto_FechaCreado);
    PriceRules.Producto_FechaCreado = Rules.Date(DateRules.Producto_FechaCreado);

    Validator.addRules(NameRules);
    Validator.addRules(DescriptionRules);
    Validator.addRules(PriceRules);
    Validator.addRules(DateRules);
},

)