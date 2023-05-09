# Firebase Authentication with Next.js

This repository provides an example of how to integrate Firebase Authentication with Next.js.

## Prerequisites

To use Firebase Authentication with Next.js, you will need to create a Firebase project and obtain your Firebase API credentials. You can follow the Firebase documentation to set up your project and obtain your credentials.

## Installation

DIY

Create a .env.local file and add your Firebase API credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>
```

## Usage

### Import Firebase and initialize it with your API credentials:

```
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
```

### Use the getAuth method to get the Firebase Authentication instance with firebaseConfig from about:

```
const auth = firebase.auth(firebase_app);
```

### Use the onAuthStateChanged method to detect changes in the user's authentication state - I write an AuthContext to check this:

```
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in, you can do things like redirect to a dashboard
  } else {
    // User is signed out
  }
});
```

### Use the signInWithEmailAndPassword method to sign in a user with email and password:

```
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
```

### Use the createUserWithEmailAndPassword method to create a new user with email and password:

```
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
```

## Deployment

You can deploy this Next.js app to various platforms like Vercel, Netlify, and more. You can follow the Next.js deployment documentation to learn more about deploying your app.

## License

This repository is licensed under the MIT License.
