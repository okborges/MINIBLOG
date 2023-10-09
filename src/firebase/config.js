// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyB_AxwDZPpIGuG8ME4O7ROHWO8JLK0apbo',
	authDomain: 'miniblog-okborges.firebaseapp.com',
	projectId: 'miniblog-okborges',
	storageBucket: 'miniblog-okborges.appspot.com',
	messagingSenderId: '89638451524',
	appId: '1:89638451524:web:8a06e75994249c655ebf11',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export {db}
