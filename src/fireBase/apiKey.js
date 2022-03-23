import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDm1WFRXoF2RMEJab6IqEUcRjuO73fss0",
  authDomain: "techome-2f41f.firebaseapp.com",
  projectId: "techome-2f41f",
  storageBucket: "techome-2f41f.appspot.com",
  messagingSenderId: "560070430307",
  appId: "1:560070430307:web:62bb6fafff5c30cc2cf256"
};

const app = initializeApp(firebaseConfig);

export const getFireStoreApp = ()=> {
    return app
}