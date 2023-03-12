let image = document.getElementById("like");

    image.addEventListener("click", function(){

        let lastImage = image.getAttribute("src")
        image.setAttribute("src","./imagens/thumbsdown.png")

        console.log(lastImage)


    })




// let image = document.getElementById("like");

// image.addEventListener("click", function(){

//     image.setAttribute("cor", "vermelho");
// })