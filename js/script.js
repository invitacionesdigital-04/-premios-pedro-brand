/* ---------- Conteo regresivo (hora de RD, UTC-4) ---------- */
(function(){
  var target = new Date('2026-11-28T17:30:00-04:00').getTime();
  var box = document.getElementById('countdown');
  var el = {};
  box.querySelectorAll('[data-u]').forEach(function(n){ el[n.dataset.u] = n; });
  function pad(n){ return String(n).padStart(2,'0'); }
  function tick(){
    var diff = target - Date.now();
    if (diff <= 0){
      box.innerHTML = '<span class="cd-done gold-text">¡Hoy es la gran noche!</span>';
      clearInterval(timer); return;
    }
    var s = Math.floor(diff/1000);
    el.d.textContent = pad(Math.floor(s/86400));
    el.h.textContent = pad(Math.floor(s%86400/3600));
    el.m.textContent = pad(Math.floor(s%3600/60));
    el.s.textContent = pad(s%60);
  }
  var timer = setInterval(tick,1000); tick();
})();

/* ---------- Modales ---------- */
document.querySelectorAll('[data-open]').forEach(function(btn){
  btn.addEventListener('click', function(){
    var d = document.getElementById(btn.dataset.open);
    if (d && d.showModal) d.showModal();
  });
});
document.querySelectorAll('dialog').forEach(function(d){
  d.addEventListener('click', function(e){
    if (e.target === d || e.target.closest('[data-close]')) d.close();
  });
});
