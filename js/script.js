var firebaseConfig = {
    apiKey: "AIzaSyB1Sbb5nfISFIBB-rU7mb6AAXy_DkwrIdE",
    authDomain: "test-e8d85.firebaseapp.com",
    databaseURL: "https://test-e8d85.firebaseio.com",
    projectId: "test-e8d85",
    storageBucket: "test-e8d85.appspot.com",
    messagingSenderId: "1041735152833",
    appId: "1:1041735152833:web:b1174a163192ad2e831040",
    measurementId: "G-ECP6HZNT2F"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var username = document.getElementById("username");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    firebase.database().ref("users").child(user.uid).set(username);

    alert("Signed Up");
}

function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");


    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In: " + email.value);

}

function signOut() {
    auth.signOut();
    alert("Signed Out");
}

auth.onAuthStateChanged(function(user) {
    if(user) {
        var email = user.email;
        header.textContent = 'Active User: ' + email;
    } else {
        header.textContent = 'No Active User';
    }
})

function homepage() {
    var user = firebase.auth().currentUser;
    if(user) {
        window.location = '/homepage.html';
    } else {
        alert("Please Sign In");
    }
}

