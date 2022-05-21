valor = 200
function calcTotal(){
    let cantidad = document.getElementById('cantidad').value
    let categoria = document.getElementById('categoria').value
    let precio = valor * cantidad
    if(categoria == 1){
        precio -= precio*0.8
    }
    else if (categoria == 2){
        precio -= precio * 0.5
    }
    else{
        precio -= precio * 0.15
    }
    document.getElementById('precioTotal').innerHTML = precio
}

function upCat(cat){
    document.getElementById("categoria").value=cat
    calcTotal()
}