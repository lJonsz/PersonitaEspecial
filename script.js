document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

   
    const messages = [
        "El tiempo que paso contigo es muy especial 💖",
        "Eres mi casualidad más bonita 💘🌹",
        "Tu sonrisa ilumina mi vida ✨",
        "En mi vida eres como un panda: Especial, única y adorable 🐼",
        "Eres mi camino y siempre vas a ser mi camino 🕷️🕸️",
        "Eres la única rosa en mi jardín 🌷",
        "Eres el tipo de persona que, sin hacer ruido, llena todo de magia 💛",
        "La sonrisa es mia, pero el motivo eres tu 💕",
        "Eres ese detalle bonito que hace que mis días sean mejores 💓",
        "De todas las cosas bonitas en el mundo, tú eres mi favorita 🥰"
    ];

    
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            
            if (card.classList.contains('flip')) return;

            
            const back = card.querySelector('.back');
            back.textContent = messages[index];

            
            card.classList.add('flip');

            
            if (index === messages.length - 1) {
                setTimeout(() => {
                    alert("¡Feliz día de San Valentín! ❤️");
                }, 800);
            }
        });
    });

    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '🐼';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;  
        document.querySelector('.heart-rain').appendChild(heart);

        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    
    setInterval(createHeart, 300);
});