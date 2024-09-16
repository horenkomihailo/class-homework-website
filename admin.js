document.getElementById('logoutBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

function submitHomework() {
    const lesson = document.getElementById('lesson').value;
    const homework = document.getElementById('homework').value;

    // Логика для сохранения данных
    console.log(`Урок: ${lesson}, Домашнее задание: ${homework}`);
    alert('Домашнее задание сохранено');
}
