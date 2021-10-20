$(function () {
    var $registerForm = $("#createForm");
    if ($registerForm.length) {
        $registerForm.validate()
    }

    var UsernameRules = { Usuario_Username: {} };
    UsernameRules.Usuario_Username = Rules.Required(UsernameRules.Usuario_Username);
    UsernameRules.Usuario_Username = Rules.MinLenght(UsernameRules.Usuario_Username, 4);
    UsernameRules.Usuario_Username = Rules.MaxLenght(UsernameRules.Usuario_Username, 12);

    var PasswordRules = { Usuario_Password: {} };
    PasswordRules.Usuario_Password = Rules.Required(PasswordRules.Usuario_Password);
    PasswordRules.Usuario_Password = Rules.MinLenght(PasswordRules.Usuario_Password, 4);
    PasswordRules.Usuario_Password = Rules.MaxLenght(PasswordRules.Usuario_Password, 12);

    Validator.addRules(UsernameRules);
    Validator.addRules(PasswordRules);
},
    
)