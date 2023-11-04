// login //

import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './config.js';


const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')


form.addEventListener('submit', (ahsanL) => {
    ahsanL.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            window.location = 'index.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            Swal.fire({
                icon: 'error',
                title: '<h3 style="color: #00AD96 ">Oops...</h3>',
                text: 'Sorry,plese signup ',
                confirmButtonColor: "#00AD96",
                iconColor: '#00AD96',
              })
            // alert(errorMessage)
        });
})