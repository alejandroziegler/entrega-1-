


function saludar(){
    let nombreUsuario =prompt("vuenos dias ingresa tu nombre porfabor" )
    if(nombreUsuario == "alejandro" ){
        alert("hola muy buenos dias alejandro" + nombreUsuario)
    }else if(nombreUsuario == "agus"){
        alert("no sos alejandro, pero sos "+ nombreUsuario +". asi que bienbenido")
    }else if(nombreUsuario == "ibar"){
        alert(`hola ${nombreUsuario} capo`)
    }else{
        alert("no eres bienvenido")
    }
}
saludar()

//alert( "bienbenido " + nombreUsuario) 


let productos = ["mansana","pera"]

productos.push("durasno")
productos.push("tomate")
productos.push("albaca")
productos.push("cebolla")
productos.push("tomillo")

alert("nuestros actuales producto en estoc son")

alert(productos)

for (let productoDeceado = 0; productoDeceado<3; productoDeceado++){
    prompt("ingresa el producto que decea comprar")


    alert("a sido seleccionado su producto " + productoDeceado )

        let mansana = 50
        let pera = 20
        if (mansana>pera || mansana >40){
            alert("presio")
        }
        
}


function  bendedor (persona,edad,apellido,sexo ){

    this.persona = persona,
    this.edad = edad,
    this.apellido = apellido,
    this.sexo = sexo

}
let bendedor1 =new bendedor("alejandro",19,"ziegler","masculino")
let bendedor2 =new bendedor("santiago",19,"burgoz","masculino")

alert("a sido atendido por nustro bendedor1")
alert(bendedor1.persona )
alert("y por nustro bendedor2")
alert(bendedor2.persona)









