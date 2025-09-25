// 🌗 Alternar modo claro/escuro
document.getElementById('toggle-theme')?.addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === 'light' ? '' : 'light';
});

// ✏️ Atualizar título e rodapé ao editar o nome
document.getElementById('editable-name')?.addEventListener('input', e => {
  document.getElementById('site-title').textContent = e.target.textContent;
  document.getElementById('footer-name').textContent = e.target.textContent;
});

// ⬆ Mostrar botão de voltar ao topo
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ✨ Animações ao rolar
const elements = document.querySelectorAll('section, main, footer');
const reveal = () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) el.classList.add('visible');
  });
};
window.addEventListener('scroll', reveal);
reveal();
