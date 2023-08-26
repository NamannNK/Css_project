document.addEventListener('DOMContentLoaded', function () {
    const pseudoElementBox = document.querySelector('.pseudo-element-box');

    pseudoElementBox.addEventListener('mouseover', function () {
        pseudoElementBox.classList.add('hovered');
    });

    pseudoElementBox.addEventListener('mouseout', function () {
        pseudoElementBox.classList.remove('hovered');
    });
});
