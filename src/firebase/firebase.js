import * as app from 'firebase/app';
import firebaseConfig from './config';

class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
    }
}

// eslint-disable-next-line
const firebase= new Firebase();
export default firebase;