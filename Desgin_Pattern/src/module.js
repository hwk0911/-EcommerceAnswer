var module = (function () {
    var privateKey = 0;
    function privateMethod() {
        return ++privateKey;
    }

    return {
        publicKey : privateKey,
        publicMethod : function() {
            return privateMethod();
        }
    }
})