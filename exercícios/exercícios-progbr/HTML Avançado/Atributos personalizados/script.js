// let image = document.getElementById("like");

//     image.addEventListener("click", function(){

//         let lastImage = image.getAttribute("src")
//         image.setAttribute("src","./imagens/thumbsdown.png")

//         console.log(lastImage)


//     })








// let image = document.getElementById("like");

// image.addEventListener("click", function(){

//     image.setAttribute("cor", "vermelho");
// })








let lista = document.getElementById("lista");



let num = parseInt(lista.dataset.number);



let conteudo = ""

for (let i = 0; i < num; i++){

    conteudo += "<li>"+ i + "</li>";
    
}

lista.innerHTML = conteudo;