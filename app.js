$('fieldset').hide();

$('.central > p').click(function (e){
    proximo= $ (this).next();
 $(proximo).slideToggle();
});

function retângulo(b,h){
    area=(b * h);
    $('#r-Retângulo').html("A area é " + area +"u²");
}

function triângulo(b,h){
    area=(b * h)/2;
    $('#triângulo').html("A area é " + area +"u²");
}

function losango(Dmaior,dmin){
    area=(Dmaior* dmin)/2;
    $('#losango').html("A area é " + area +"u²");
}

function trapezio(Bmaior,bmin,h){
    area= parseFloat(Bmaior) + parseFloat(bmin)*h/2;
    $('#trapezio').html("A area é " + area +"u²");
}

function quadrado(Lado){
    area= (Lado*Lado);
    $('#quadrado').html("A area é " + area +"u²");
}
function circulo (raio){
    area=raio*raio*3,14;
    $('#circulo').html("A area é " + area +"u²");
}