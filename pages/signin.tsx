import React from 'react';
import { useRouter } from 'next/router';

import { Store } from 'src/modules/storage.module';
import { Certify } from 'src/modules/certificate/certificate.service';
import { Loading } from 'src/ui/Loading';
import { Button } from 'src/ui/Button';
import { Logo } from 'src/ui/Logo';

export default function SignIn() {
  const router = useRouter();
  const cert = Store.react(Store.certificate);
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [submit, setSubmit] = React.useState(false);

  const onSubmit = () => setSubmit(true);
  const onPass = (e: any) => setPass(e.target.value);
  const onEmail = (e: any) => setEmail(e.target.value);

  React.useEffect(() => {
    console.log('SignIn router', router);
    if (cert.data) router.push(`/?from=${router.query.from}`, '/');
  }, [cert.data, router]);

  React.useEffect(() => {
    if (submit && pass !== '' && email !== '') Certify.signIn(email, pass);
  }, [email, pass, submit]);

  React.useEffect(() => {
    if (cert.redirect) {
      router.push(cert.redirect[0], cert.redirect[1]);
    }
  }, [cert.redirect, router]);

  if (cert.data || cert.status === 'loading') return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Logo symbol="fp" />
      <p>Sign in to your flashpub account in order to continue</p>
      <input
        className="border-2 px-4 py-2 rounded-lg my-2"
        type="email"
        value={email}
        onChange={onEmail}
        placeholder="email"
      />
      <input
        className="border-2 px-4 py-2 rounded-lg mb-2"
        value={pass}
        type="password"
        onChange={onPass}
        placeholder="password"
      />
      <Button onClick={onSubmit} label="Sign in" />
    </div>
  );
}
