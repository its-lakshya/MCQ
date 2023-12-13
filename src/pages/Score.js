import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


const Score = () => {
  const score = useSelector((store) => store.scoreDetails.score);
  const navigate = useNavigate();
  const authStatus = useSelector(
    (store) => store.authenticationDetails.isAuthenticated
  );

  const handleHome = () => {
    navigate("/welcome");
  }

  if (!authStatus) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="text-[#FFF2E6] h-screen flex flex-col items-center justify-center gap-y-8 bg-[#1D4645]">
        <div className="font-bold text-4xl max-md:text-2xlff text-center">Here is your Score</div>
        <div className="w-80 h-80 rounded-full bg-[#0C2323] border-dashed flex items-center justify-center max-md:w-72 max-md:h-72 ">
            <div
            className="w-72 h-72 rounded-full border-8 border-[#FFF2E6] animate-pulse flex items-center justify-center font-bold
                    text-9xl max-md:w-64 max-md:h-64 text-white"
            >
            {"" + score}
            <span className='text-4xl '>/10</span>
            </div>
        </div>
        <button className='border border-[#FFF2E6] p-4 rounded-3xl w-36 font-semibold hover:bg-[#0C2323] hover:bg-opacity-30 
                                flex items-center justify-center gap-x-3'
            onClick={()=> {handleHome()}}
            >
                <IoIosArrowBack/>
                Home
        </button>
    </div>
  );
};

export default Score;