import Head from 'next/head';
import tw from 'twin.macro';

const StyledDiv = tw.div`flex flex-col items-center justify-center min-h-screen py-2`;

export default function Home() {
  return (
    <StyledDiv>
      <Head>
        <title>FLASHPUB PUBLISH</title>
      </Head>
    </StyledDiv>
  );
}
