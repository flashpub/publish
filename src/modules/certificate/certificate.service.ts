import { Certificate } from 'src/flashpub-types';

import { Store } from 'src/modules/storage.module';
import { Backend } from 'src/modules/backend.module';

export const Certify = {
  createCertificate: (data: any): Certificate =>
    data
      ? {
          uid: data.uid,
          displayName: data.displayName,
          photoURL: data.photoURL,
          email: data.email,
          emailVerified: data.emailVerified,
          phoneNumber: data.phoneNumber,
          isAnonymous: data.isAnonymous,
          tenantId: data.tenantId,
          apiKey: data.l,
          providerData: data.providerData,
        }
      : null,
  signIn: async (email: string, password: string) => {
    Store.certificate.status = 'loading';
    try {
      const resp = await Backend.Auth().signInWithEmailAndPassword(
        email,
        password,
      );
      Store.certificate.data = Certify.createCertificate(resp.user);
      Store.certificate.status = 'success';
    } catch (e) {
      Store.certificate.status = 'error';
      Store.certificate.redirect = [`/ooops?error=${e.message}`, '/ooops'];
    }
  },
  verifyOnRemote: (uid: string) => {
    Store.certificate.status = 'loading';
    Backend.Auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        fetch(
          `https://us-central1-flashpub-dev.cloudfunctions.net/api/verify/user/${uid}`,
          {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              authorization: `${idToken}`,
            },
          },
        )
          .then((resp) => {
            const isVerified = resp.json();
            if (!isVerified) {
              const msg =
                'The token could not be verified. Please try relogging.';
              Store.certificate.status = 'error';
              Store.certificate.redirect = [`/ooops?error=${msg}`, '/ooops'];
            } else Store.certificate.status = 'success';
          })
          .catch((e) => {
            Store.certificate.status = 'error';
            Store.certificate.redirect = [
              `/ooops?error=${e.message}`,
              '/ooops',
            ];
          });
      })
      .catch((e) => {
        Store.certificate.status = 'error';
        Store.certificate.redirect = [`/ooops?error=${e.message}`, '/ooops'];
      });
  },
};
