// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.2.3/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': '735679930457'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
var messaging = firebase.messaging();

messaging.setBackgroundMessageHandler (function (payload) {
    console.log("Received background message "+payload);
    var obj = JSON.parse(payload.data.notification);
    var notificationTitle = obj.title;
    var notificationOption = {
        body: obj.body,
        icon: obj.icon
    }
    return self.registration.showNotification(notificationTitle, notificationOption);
});