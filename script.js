// Жапырақ жасау функциясы
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    document.body.appendChild(leaf);

    let size = Math.random() * 15 + 10; // Көлемін әртүрлі қыламыз
    leaf.style.width = size + 'px';
    leaf.style.height = size + 'px';

    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.top = '-50px';
    leaf.style.opacity = Math.random();
    leaf.style.animation = fall ${Math.random() * 5 + 3}s linear infinite;

    setTimeout(() => {
        leaf.remove();
    }, 6000);
}

// Әр 200 мс сайын жаңа жапырақ қосылады
setInterval(createLeaf, 200);