const btnLang = document.getElementById('toggleLang');
const textoES = document.getElementById('texto-es');
const textoEN = document.getElementById('texto-en');

btnLang.addEventListener('click', () => {
  const isSpanish = textoES.style.display !== 'none';
  textoES.style.display = isSpanish ? 'none' : 'block';
  textoEN.style.display = isSpanish ? 'block' : 'none';
  btnLang.textContent = isSpanish ? 'Español' : 'English';
});
