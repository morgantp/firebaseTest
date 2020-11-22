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
        welcome.textContent = 'Signed In: ' + email;
    } else {
        alert("You must be signed in to see this page!");
        window.location = '/index.html';
    }
})

function signOut() {
    auth.signOut();
    alert("Signed Out");
}

function writeData() {
    navigator.geolocation.getCurrentPosition(position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        var user = firebase.auth().currentUser;
        if(user) {
            var userid = user.uid;
            var email = user.email;
            firebase.database().ref("Input").set({
                user: userid,
                email: email,
                latitude: latitude,
                longitude: longitude,
                number: document.getElementById("numberField").value,
                postcode: document.getElementById("postcodeField").value
            })
        }
        var map = L.map('map').setView([latitude, longitude], 16);

        L.circle([latitude, longitude], {radius: 150}).addTo(map);

        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=sJdX2R69yUO7n4qEW4gl', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' ,
        }).addTo(map);
    })
}