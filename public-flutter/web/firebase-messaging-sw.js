importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
    apiKey: "AIzaSyDljjvSVKS1oP-Sif2PAXrT9mq0R6PEmw4",
    authDomain: "aanandamstores.firebaseapp.com",
    projectId: "aanandamstores",
    storageBucket: "aanandamstores.appspot.com",
    messagingSenderId: "766132443857",
    appId: "1:766132443857:web:090214c846e1cc746643f0",
    measurementId: "G-3NV3JHMBYZ"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});