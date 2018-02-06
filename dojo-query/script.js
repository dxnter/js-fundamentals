const $Dojo = (id) => {
    document.addEventListener("click", function() {
        document.getElementById("clickEvent").innerHTML = `<h1>You clicked the button</h1>`
    });

    document.addEventListener("mouseover", function() {
        document.getElementById("hoverEvent").innerHTML = `<h1>Mouse is over the element</h1>`
    })
    document.addEventListener("mouseout", function() {
        document.getElementById("hoverEvent").innerHTML = `<h1>Mouse is NOT over the element</h1>`
    })
}

