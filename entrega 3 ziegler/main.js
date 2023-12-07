const producto = function (nombre,precio,cantidad){

    this.nombre = nombre,
    this.precio = precio,
    this.cantidad = cantidad

}
let producto1 =new productos("pera",50,105)
let producto2 =new productos("papa",360,145)
let producto3 =new productos("rucula",410,135)
let producto4 =new productos("tomate",570,195)
let producto5 =new productos("sandias",20,19)
let producto6 =new productos("arandano",640,85)
let producto7 =new productos("lima",260,254)
let producto8 =new productos("limon",90,249)

let lista=[producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]

if(localStorage.getItem("productos")){
    lista= JSON.parse(localStorage.getItem("productos"))
}else{
    lista = lista
}

function filtrarProductos(){
    const body = document.querySelector("body")
    const input = document.getElementById("filtrarP").value
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length > 0){

        const container = document.createElement("div")

        resultado.forEach( (producto)=>{
            const card = document.createElement("div")

        const nombre = document.createElement("h2")
        nombre.textContent = `nombre: ${producto.nombre}`
        card.appendChild(nombre)

        const precio = document.createElement("p")
        precio.textContent = `precio: ${producto.precio}` 
        card.appendChild(precio)
            
        const stock = document.createElement("p")
        stock.textContent = `cantidad: ${producto.stock}`
        card.appendChild(stock)

        container.appendChild(card)
        })
        body.appendChild(container)

    }else{
        alert("no existe ninguna concidencia")
    }
}

function agregarproducto(){
    const form= document.createElement("form")
    form.innrtHTML=`
    <label for="nombre-inut">nombre:</lebl>
    <input id="nombre-inut" type="text" step="0.01" required>

    <label for="precio-inut">precio:</lebl>
    <input id="precio-inut" type="numbre" step="0.01" required>
    
    <label for="stock-inut">stock:</lebl>
    <input id="stock-inut" type="numbre" step="0.01" required>

    <buttom type="sumbit">agregar</buttom>
    `
    form.addEventListener("submit", function (e){
        e.preventDefault();

        const nombreInput =document.getElementById("nombre-input").value.trim()
        const precioinput =parseFloat(document.getElementById("precio-inut").value)
        const stockinput =parseInt(document.getElementById("stock-inut").value)

        if(isNaN(precioinut) || isNaN(stockinut) || nombreinput ==="" ){
            alert("ingrece valores validos")
            return
        }
        const producto =new Promise(nombreInput,precioinput,stockinput ) 
        
        if(lista.some ((elemento)=> elemenro.nombre === producto.nombre)){
            alert("su producto ya existe")
            return
        }
        lista.push(producto)

        localStorage.setItem("productos",joson.stringify(lista))
        alert(`se agrego el producto ${producto.nombre} a su lista`)

        lista.forEach((producros)=>{
            const card =document.childElementCount("div")

        const nombre = document.createElement("h2")
        nombre.textContent = `nombre: ${producto.nombre}`
        card.appendChild(nombre)
    
        const precio = document.createElement("p")
        precio.textContent = `precio: ${producto.precio}` 
        card.appendChild(precio)
                
        const stock = document.createElement("p")
        stock.textContent = `cantidad: ${producto.stock}`
        card.appendChild(stock)

        container.appendChild(card)
        })
        const body=document.querySelector("body")
        body.appendChild(container)

        form.reset()

    })
    const body=document.querySelector("body")
    body.appendChild(form)


}

const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.addEventListener("clik", filtrarProductos)

const agregarBtn= document.getElementById("agregarproducto")
agregarBtn.addEventListener("clik", agregarproducto)