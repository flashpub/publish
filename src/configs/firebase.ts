import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const defaultConfig = {
  appId: process.env.appId,
  apiKey: process.env.apiKey,
  projectId: process.env.projectId,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
};

export class Firebase {
  public auth: typeof firebase.auth;
  public storage: typeof firebase.storage;
  public functions: typeof firebase.functions;
  public db: ReturnType<firebase.app.App['firestore']>;

  constructor(config = defaultConfig) {
    this.db = !firebase.apps.length
      ? firebase.initializeApp(config).firestore()
      : firebase.app().firestore();
    this.auth = firebase.auth;
    this.functions = firebase.functions;
    this.storage = firebase.storage;
  }
}
