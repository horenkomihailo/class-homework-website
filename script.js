document.getElementById('loginBtn').addEventListener('click', () => {
    const password = prompt('Введите пароль администратора:');
    if (password === 'your-password-here') {
        window.location.href = 'admin.html'; // Страница для администратора
    } else {
        alert('Неверный пароль');
    }
});

// Import the functions you need from the SDKs you need
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
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Function to load homework data
function loadHomework() {
    const dbRef = firebase.database().ref('homework');
    dbRef.on('value', (snapshot) => {
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
    });
}

// Call loadHomework on page load
document.addEventListener('DOMContentLoaded', loadHomework);
