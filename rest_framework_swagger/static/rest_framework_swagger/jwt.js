var util = {
    setTokenAndReload: function (token) {
        if (token == undefined) {
            console.log("expect a jwt token !!!!")
            return
        }
        swaggerUi.api.clientAuthorizations.add(
            "key",
            new SwaggerClient.ApiKeyAuthorization("Authorization",
                " " + token,
                "header"
            )
        );
        localStorage.setItem("token", token)
        swaggerUi.load()
        console.log("set token:  " + token + " !!")

    },
    setToken: function (token) {
        localStorage.setItem("token", token)
        console.log("set token:  " + token + " !!")
        return token
    },

    getToken: function () {
        var token = localStorage.getItem("token",)
        console.log("get token:  " + token + " !!")
        return token
    },
    removeToken: function () {
        var token = localStorage.removeItem("token",)
        console.log("remove token:  " + token + " !!")
        return token
    },
    reloadToken: function () {
        var token = this.getToken()
        if (token == null) {
            console.log("local token: null  !!")
            return
        }

        this.setTokenAndReload(token)
    }
}

setTimeout(function () {
    util.reloadToken()
}, 1000)

$("body").on("mouseover", ".auth_submit__button", function (e) {
    e.preventDefault()
    console.log("event hooked!!")

    var token = $(".input_apiKey_entry").val()
    if (token == "") {
        console.log("set token: empty  !!")
        return
    }
    util.setToken(token)

})