import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  // apiKey: 'AIzaSyC75ZnBc-5GYrCRHs_Os04BToOOBPC1DsM', // staging
  apiKey: 'AIzaSyC0VpcMqW47eNPDlQmY1EizpuMMUXdxopg', // dev
  // authDomain: "flashpub-staging-489e3.firebaseapp.com",
  // databaseURL: "https://flashpub-staging-489e3.firebaseio.com",
  // projectId: 'flashpub-staging-489e3', // staging
  projectId: 'flashpub-dev', //dev
  // storageBucket: "flashpub-staging-489e3.appspot.com",
  // messagingSenderId: "560542879631",
  // appId: "1:560542879631:web:9a1d0ae19e79d36513c5fa",
};

class BackendConstructor {
  public Api: typeof firebase;
  public Auth: typeof firebase.auth;
  public Storage: typeof firebase.storage;
  public DB: ReturnType<firebase.app.App['firestore']>;

  constructor() {
    this.Api = firebase;
    this.Auth = firebase.auth;
    this.Storage = firebase.storage;
    this.DB = !firebase.apps.length
      ? firebase.initializeApp(firebaseConfig).firestore()
      : firebase.app().firestore();
  }
}

const Backend = new BackendConstructor();

export { Backend };
