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
        <div className='bg-[#1D4645] h-screen w-full flex items-center justify-center'>

            <McqQuestions/>
        </div>
    )
    
}

export default Mcq;