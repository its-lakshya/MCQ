import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import McqQuestions from "../components/McqQuestions";


const Mcq = () => {


    const authStatus = useSelector(
        (store) => store.authenticationDetails.isAuthenticated
    );

    if (!authStatus) {
        return <Navigate to="/" replace />;
    }
    return(
        <McqQuestions/>
    )
    
}

export default Mcq;