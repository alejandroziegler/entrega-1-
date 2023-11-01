


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

for (let productoDeceado = 0; productoDeceado<3; productoDeceado++){
    prompt("ingresa el producto que decea comprar")


    alert("a sido seleccionado su producto " + productoDeceado )

        let mansana = 50
        let pera = 20
        if (mansana>pera || mansana >40){
            alert("presio")
        }
        
}