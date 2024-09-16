import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwS8O0Y4u6Qr1E21h7O9ny4ionOWirIN4",
    authDomain: "class-homework-website.firebaseapp.com",
    projectId: "class-homework-website",
    storageBucket: "class-homework-website.appspot.com",
    messagingSenderId: "83260705506",
    appId: "1:83260705506:web:9fee3788b19fbcaa866cbb",
    measurementId: "G-3VGM5K3V20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to save homework to the database
export function submitHomework() {
    const lesson = document.getElementById('lesson').value;
    const homework = document.getElementById('homeworkText').value;

    const homeworkRef = ref(database, 'homework/' + Date.now()); // Используем уникальный идентификатор

    set(homeworkRef, {
        lesson: lesson,
        homework: homework,
        date: new Date().toISOString() // Timestamp
    }).then(() => {
        alert('Домашнее задание сохранено');
        document.getElementById('lesson').value = '';
        document.getElementById('homeworkText').value = '';
    }).catch((error) => {
        console.error('Ошибка сохранения:', error);
    });
}

// Function to load homework data
export function loadHomework() {
    const homeworkRef = ref(database, 'homework');

    onValue(homeworkRef, (snapshot) => {
        const homeworkList = snapshot.val();
        const homeworkContainer = document.getElementById('homework');
        homeworkContainer.innerHTML = '';

        for (const id in homeworkList) {
            const homework = homeworkList[id];
            homeworkContainer.innerHTML += `
                <div class="homework-item">
                    <h3>${homework.lesson}</h3>
                    <p>${homework.homework}</p>
                    <small>${new Date(homework.date).toLocaleDateString()}</small>
                </div>
            `;
        }
    }, (error) => {
        console.error('Ошибка получения данных:', error);
    });
}

// Call loadHomework on page load
document.addEventListener('DOMContentLoaded', loadHomework);

// Event listener for admin login
document.getElementById('loginBtn').addEventListener('click', () => {
    const password = prompt('Введите пароль для администратора');
    if (password === 'your_password') { // Замените 'your_password' на реальный пароль
        document.getElementById('adminPanel').style.display = 'block';
    } else {
        alert('Неверный пароль');
    }
});

// Event listener for saving homework
document.getElementById('submitHomework').addEventListener('click', submitHomework);
