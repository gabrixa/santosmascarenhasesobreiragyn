
/* SMS: transparência no topo e grafite após rolagem */
document.addEventListener('DOMContentLoaded',function(){
 const header=document.getElementById('sms-header');
 const toggle=document.getElementById('sms-menu-toggle');
 const nav=document.getElementById('sms-menu');
 if(!header)return;
 const atualizar=()=>header.classList.toggle('scrolled',window.scrollY>30);
 atualizar();window.addEventListener('scroll',atualizar,{passive:true});
 if(!toggle||!nav)return;
 function fechar(){header.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');}
 toggle.addEventListener('click',function(){const aberto=header.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(aberto));toggle.setAttribute('aria-label',aberto?'Fechar menu':'Abrir menu');});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',fechar));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')fechar();});
 window.addEventListener('resize',()=>{if(window.innerWidth>900)fechar();});
});
