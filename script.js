// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const body = document.body;
    
    // Criar overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);
    
    // Adicionar índice para animação dos itens do menu
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
    
    // Função para abrir/fechar menu
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Event listeners
    menuToggle.addEventListener('click', toggleMenu);
    
    overlay.addEventListener('click', toggleMenu);
    
    // Fechar menu ao clicar em um link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
            
            // Scroll suave para a seção
            const targetId = link.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            }
        });
    });
    
    // Fechar menu ao redimensionar para desktop
    window.addEventListener