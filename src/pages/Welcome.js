import Header from "../components/Header";
import Landing from "../components/Landing";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Welcome = () => {
  const authStatus = useSelector(
    (store) => store.authenticationDetails.isAuthenticated
  );

  if (!authStatus) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="">
      <Header />
      <Landing />
    </div>
  );
};

export default Welcome;
