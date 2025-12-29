import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging-sw.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMcxuH-8Pc0t8eC71xOU8TXLu0ZoF-RG4",
  authDomain: "mitches-coffee.firebaseapp.com",
  projectId: "mitches-coffee",
  storageBucket: "mitches-coffee.firebasestorage.app",
  messagingSenderId: "789709713646",
  appId: "1:789709713646:web:3f09ce026b40a85b3f03ff"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // Make sure this path matches your icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
