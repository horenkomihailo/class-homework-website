document.getElementById('logoutBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

function submitHomework() {
    const lesson = document.getElementById('lesson').value;
    const homework = document.getElementById('homework').value;

    // Reference to your Firebase database
    const dbRef = firebase.database().ref('homework');

    // Add new homework to the database
    dbRef.push({
        lesson: lesson,
        homework: homework,
        date: new Date().toISOString() // Timestamp
    }).then(() => {
        alert('Домашнее задание сохранено');
    }).catch((error) => {
        console.error('Ошибка сохранения:', error);
    });
}
