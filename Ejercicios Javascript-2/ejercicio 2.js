function contador(){
    var total = 50
    setTimeout(function(){
       var valor = document.getElementById('contador');
       var respuesta = document.getElementById('resultado');
       var cantidad = valor.value.length
       document.getElementById('resultado').innerHTML = cantidad + '/' + (total - cantidad);
       if (cantidad > total){
        respuesta.style.color = 'red'
       }
       else {
        respuesta.style.color = 'black'
       }
    })
}