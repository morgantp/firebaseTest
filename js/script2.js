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

auth.onAuthStateChanged(function(user) {
    if(user) {
        var email = user.email;
        alert("Signed In " + email);
    } else {
        alert("not working");
    }
})
