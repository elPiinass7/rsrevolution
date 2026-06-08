// Init script - Carga configuración y componentes globales
document.addEventListener('DOMContentLoaded',()=>{
  if(typeof CONFIG==='undefined')return;
  // ReCAPTCHA: Asigna sitekey dinámicamente
  document.querySelectorAll('.g-recaptcha[data-sitekey=""]').forEach(el=>{
    el.setAttribute('data-sitekey',CONFIG.recaptcha?.siteKey||'');
    // Renderizar si el script ya cargó
    if(typeof grecaptcha!=='undefined')grecaptcha.render(el);
  });
  // Scroll button
  const scrollBtn=document.getElementById('scrollTopBtn');
  if(scrollBtn){
    window.addEventListener('scroll',()=>scrollBtn.style.display=window.scrollY>300?'block':'none');
    scrollBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  }
});
window.scrollToTop=()=>window.scrollTo({top:0,behavior:'smooth'});
