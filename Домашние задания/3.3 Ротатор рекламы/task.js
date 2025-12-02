const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
    const cases = rotator.querySelectorAll('.rotator__case');

    const activateCase = (index) => {
        cases.forEach((item) => {
            item.classList.remove('rotator__case_active');
        });

        const currentCase = cases[index];
        currentCase.classList.add('rotator__case_active');

        const color = currentCase.dataset.color;
        if (color) {
            currentCase.style.color = color;
        }

        const speed = Number(currentCase.dataset.speed) || 1000;
        const nextIndex = (index + 1) % cases.length;

        setTimeout(() => {
            activateCase(nextIndex);
        }, speed);
    };
    activateCase(0);
});