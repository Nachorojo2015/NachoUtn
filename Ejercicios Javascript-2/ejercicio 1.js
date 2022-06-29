var div1 = document.getElementById('rojo');
var div2 = document.getElementById('azul');
var div3 = document.getElementById('amarillo');

div1.addEventListener('click', function(){
    var body = document.querySelector('body')
    body.style.backgroundColor = 'red'
    
});

div2.addEventListener('click', function(){
    var body = document.querySelector('body')
    body.style.backgroundColor = 'blue'
    
});
   
div3.addEventListener('click', function(){
    var body = document.querySelector('body')
    body.style.backgroundColor = 'yellow'
    
});
   
   
