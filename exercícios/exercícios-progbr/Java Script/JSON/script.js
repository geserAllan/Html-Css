const objs = [
    {
        nome: "Joseph",
        idade: 32,
        esta_trabalhando: true,
        detalhes_profissão:{
            Profissão: "Programador",
            empresa: "empresa X"
        },
        Hobbyes: ["Correr", "Nadar","Ler"] 
    },
    {
        nome: "Martin",
        idade: 30,
        esta_trabalhando: false,
        detalhes_profissão:{
            Profissão: "null",
            empresa: "null"
        },
        Hobbyes: ["Jogar", "Academia"]
    }
]

//convertendo objeto em JSon
const objData = JSON.stringify(objs)
console.log(objData)
console.log(typeof objData)


//convertendo Json em objeto
const jsonData = JSON.parse(objData)
console.log(jsonData)
console.log(typeof jsonData)

jsonData.map((pessoa) => {
    console.log(pessoa.nome)
})
