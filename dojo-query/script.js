const $Dojo = () => {
    function click(callback) {
        document.getElementById("clickEvent").click().after("<h1>Hello</h1>")
    }
}

$Dojo