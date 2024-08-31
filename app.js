// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJn8EjpmYFQeqjDPdKUqgDKbXIDva2dbk",
  authDomain: "form-smit-haris.firebaseapp.com",
  projectId: "form-smit-haris",
  storageBucket: "form-smit-haris.appspot.com",
  messagingSenderId: "646296103151",
  appId: "1:646296103151:web:91b51a707b475dbb38d31a",
  measurementId: "G-SYNDMRN44N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Firebase Authentication
const analytics = getAnalytics(app);  // Initialize Firebase Analytics

// Show a message as an alert
const showAlert = (message, type) => {
    const alertElement = document.getElementById('alert');
    alertElement.textContent = message;
    alertElement.className = `alert ${type}`;
    alertElement.classList.remove('hidden');
    setTimeout(() => {
        alertElement.classList.add('hidden');
    }, 5000); // Hide the alert after 5 seconds
};

// Sign Up function
const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        showAlert('User signed up successfully!', 'success');
        console.log('User signed up:', user);
    } catch (error) {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            error.message = "Email Already In Use"
        }
        showAlert('Error: ' + error.message, 'error');
    }
};

// Sign In function
const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        showAlert('User signed in successfully!', 'success');
        console.log('User signed in:', user);
        window.location.href = "final.html";
    } catch (error) {
        if (error.message === 'Firebase: Error (auth/invalid-credential).') {
            error.message = "Email Does Not Exist"
        }
        showAlert('Error: ' + error.message, 'error');
    }
};

// Handle form submissions
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    signUp(email, password);
});

document.getElementById('signin-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    signIn(email, password);
});

// Handle form toggling
const showSignupForm = () => {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('signin-form').classList.remove('active');
};

const showSigninForm = () => {
    document.getElementById('signin-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
};

document.getElementById('show-signup').addEventListener('click', (e) => {
    e.preventDefault();
    showSignupForm();
});

document.getElementById('show-signin').addEventListener('click', (e) => {
    e.preventDefault();
    showSigninForm();
});

// Initialize the form display
showSignupForm(); // or showSigninForm() based on your preference
