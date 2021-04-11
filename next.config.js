module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/publish?standalone=true',
        permanent: true,
      },
    ];
  },
  baseUrl: '/publish?standalone=true',
  env: {
    apiKey: 'AIzaSyC75ZnBc-5GYrCRHs_Os04BToOOBPC1DsM',
    authDomain: 'flashpub-staging-489e3.firebaseapp.com',
    databaseURL: 'https://flashpub-staging-489e3.firebaseio.com',
    projectId: 'flashpub-staging-489e3',
    storageBucket: 'flashpub-staging-489e3.appspot.com',
    messagingSenderId: '560542879631',
    appId: '1:372886308244:web:180b45c90863e50e',
    backendHost:
      'https://us-central1-flashpub-staging-489e3.cloudfunctions.net/',
  },
};
