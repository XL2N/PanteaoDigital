/* --- LÓGICA DO CARROSSEL --- */

document.addEventListener('DOMContentLoaded', () => {

    // Encontra os carrosseis da página
    const carrosseis = document.querySelectorAll('.secao-carrossel');

    // Faz um loop em cada carrossel encontrado
    carrosseis.forEach(carrossel => {
        
        // Encontra os elementos do carrossel específico
        const track = carrossel.querySelector('.carrossel-track');
        if (!track) return; 

        const slides = Array.from(track.children);
        const nextButton = carrossel.querySelector('.btn-next');
        const prevButton = carrossel.querySelector('.btn-prev');
        
        if (slides.length === 0) return; 

        // --- CALCULA O TAMANHO DO "PASSO" ---
        const slideWidth = slides[0].getBoundingClientRect().width;
        let currentIndex = 0;

        // Função para mover o carrossel
        function moveToSlide(index) {
            track.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';
            currentIndex = index;
            updateButtons();
        }

        // Função para mostrar/esconder botões
        function updateButtons() {

            if (currentIndex === 0) {
                prevButton.style.display = 'none';
            } else {
                prevButton.style.display = 'block';
            }
            
            const maxIndex = slides.length - 3;
            if (currentIndex >= maxIndex) {
                nextButton.style.display = 'none';
            } else {
                nextButton.style.display = 'block';
            }
        }

        // --- CONECTA OS BOTÕES ---
        nextButton.addEventListener('click', () => {
            const maxIndex = slides.length - 3; 
            if (currentIndex < maxIndex) {
                moveToSlide(currentIndex + 1);
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                moveToSlide(currentIndex - 1);
            }
        });

        // Inicia o carrossel
        moveToSlide(0); 
    });
});