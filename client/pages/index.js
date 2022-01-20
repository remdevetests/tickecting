import Link from 'next/link';

const LandingPage = ({ currentUser, data }) => {
  console.log("currentUser :-- " + currentUser);
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  return { name: "Remember",  surname: "Mabunda" };
};

export default LandingPage;
