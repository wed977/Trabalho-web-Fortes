/*==================== Mostrar Navbar ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validar que a variável existe
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
            // change icon
            toggleBtn.classList.toggle('bx-x');
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

/*============== slidshow ============*/ 

$(document).ready(function(){
   
    var slids = $(".div-slider [type=radio]"); // busca os radios na div
    var slids_len = slids.length; // conta o número de radios
    var intervalo = 2; // intervalo em segundos
    
    function rodar(){
       var slids_ativo = $(".div-slider [type=radio]:checked")
       .attr("id")
       .match(/\d+/)[0]; // pega o valor numérico do id do radio checado
 
       if(slids_ativo == slids_len) slids_ativo = 0; // se estiver no último slide, volta pro primeiro
 
       slids.eq(slids_ativo).prop("checked", true); // checa o radio da vez
    }
    
    var tempo = setInterval(rodar, intervalo*1000); // inicia o temporizador
    
    $(".div-slider").hover(
       function(){ // função quando entra o mouse
          clearInterval(tempo); // cancela o temporizador
       },
       function(){ // função quando retira o mouse
          tempo = setInterval(rodar, intervalo*1000); // reinicia o temporizador
       }
    );
    
 });