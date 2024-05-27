document.addEventListener("DOMContentLoaded", function() {
const mainDiv = document.getElementById('mainDiv');

    mainDiv.addEventListener('mousedown', (e) => { // Добавляем обработчик события mousedown на элемент mainDiv
    // Вычисляем смещение курсора относительно левого верхнего угла mainDiv
    let shiftX = e.clientX - mainDiv.getBoundingClientRect().left;
    let shiftY = e.clientY - mainDiv.getBoundingClientRect().top;
    
    function moveAt(pageX, pageY) { // Функция для перемещения mainDiv в новые координаты
        mainDiv.style.left = pageX - shiftX + 'px';
        mainDiv.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(e) {   // Обработчик события mousemove для перемещения mainDiv
        moveAt(e.clientX, e.clientY);
    }

    document.addEventListener('mousemove', onMouseMove);// Добавляем обработчик события mousemove к документу


    mainDiv.addEventListener('mouseup', () => {     // Добавляем обработчик события mouseup к mainDiv для прекращения перемещения
        document.removeEventListener('mousemove', onMouseMove); // Удаляем обработчик события mousemove
        // Убираем обработчик mouseup с mainDiv
        mainDiv.onmouseup = null;
    });

    mainDiv.ondragstart = () => false;    // Отключаем стандартное поведение браузера при перетаскивании
});

});
