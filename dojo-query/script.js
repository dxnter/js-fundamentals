function $Dojo(id) {
    const id = window.document.getElementById(id);


    this.click = (callback) => {
        id.addEventListener("click", callback)
    }
}

$Dojo("clickEvent").click(function() { console.log('The button was clicked!') });