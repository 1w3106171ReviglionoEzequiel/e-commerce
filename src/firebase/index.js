import firebase from 'firebase/app';
import 'firebase/firestore';

const app= firebase.initializeApp({
    apiKey: <aca van tus datos>,
    authDomain: <aca van tus datos>,
    projectId: <aca van tus datos>,
    storageBucket: <aca van tus datos>,
    messagingSenderId: <aca van tus datos>,
    appId: <aca van tus datos>,
    measurementId: <aca van tus datos>
});

export const getFirebase = ()=>{
    return app;
};

export const getFirestore = ()=>{
    return firebase.firestore(app);
};