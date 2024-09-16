document.getElementById('loginBtn').addEventListener('click', () => {
    const password = prompt('Введите пароль администратора:');
    if (password === 'your-password-here') {
        window.location.href = 'admin.html'; // Страница для администратора
    } else {
        alert('Неверный пароль');
    }
});

// Здесь можно добавить логику для переключения недель и отображения домашних заданий
