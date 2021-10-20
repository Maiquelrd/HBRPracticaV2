var Rules = {
    Required: function (RuleObj) {
        RuleObj["required"] = true;
        return RuleObj;
    },
    MinLenght: function (RuleObj, lenght) {
        RuleObj["minlength"] = lenght;
        return RuleObj;
    },
    MaxLenght: function (RuleObj, lenght) {
        RuleObj["maxlength"] = lenght;
        return RuleObj;
    },
    NotNumber: function (RuleObj) {
        RuleObj["lettersonly"] = true;
        return RuleObj;
    },
    Number: function (RuleObj) {
        RuleObj["number"] = true;
        return RuleObj;
    },
    Date: function (RuleObj) {
        RuleObj["date"] = true;
        return RuleObj;
    },
};

