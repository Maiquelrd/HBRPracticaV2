var Validator = {

    addRules: function(rulesObj) {
        for (var item in rulesObj) {
            $('#' + item).rules('add', rulesObj[item]);
        }
    },

    removeRules: function (rulesObj) {
        for (var item in rulesObj) {
            $('#' + item).rules('remove');
        }
    },

}

