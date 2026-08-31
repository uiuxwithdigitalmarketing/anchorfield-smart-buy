(function(){
  var header=document.getElementById('site-header');
  var toggle=document.querySelector('.af-mobile-toggle');
  var menu=document.getElementById('af-mobile-menu');
  function scrollState(){ if(header) header.classList.toggle('is-scrolled',window.scrollY>20); }
  scrollState(); window.addEventListener('scroll',scrollState,{passive:true});
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      var open=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!open));
      menu.hidden=open;
    });
  }
})();