document.getElementById('loginBtn').addEventListener('click', () => {
    const password = prompt('Введите пароль администратора:');
    if (password === 'your-password-here') {
        window.location.href = 'admin.html'; // Страница для администратора
    } else {
        alert('Неверный пароль');
    }
});

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
