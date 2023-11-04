// import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
        // import { auth } from './config.js';
        import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";



let name = document.getElementById('named')
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
          // The user object has basic properties such as display name, email, etc.
          const displayName = user.displayName;
          const email = user.email;
          const photoURL = user.photoURL;
          const emailVerified = user.emailVerified;
          name.innerHTML = 'hi'

          // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
          const uid = user.uid;
        }











        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user;
                console.log(uid);
            } else {
                window.location = 'login.html'
            }
        });

        const btn = document.querySelector('.btn')
        btn.addEventListener('click', () => {
            signOut(auth).then(() => {
                console.log('user logout successfully');
                window.location = 'login.html'
            }).catch((error) => {
                console.log('error ===>' , error);
            });
        })