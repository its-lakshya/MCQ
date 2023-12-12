import LandingImage from "../assets/LandingImage.svg"

const Landing = () => {
  return (
    <div className="flex justify-between items-center px-48 h-screen -mt-10 gap-x-1">
      <div className="flex flex-col items-streatch justify-center gap-y-4 w-1/2 z-10 ">
        <div className='text-[#1D4645] text-7xl w-92 font-bold'>MCQ <br></br>WITH YOU IN EVERY PREPRATION !</div>
        <div className='text-lg text-light'>We help you to prepare best.</div>
        <div className="flex flex-col gap-y-1">
        <div className='text-xl uppercase text-[#1D4645]'>Number of Active Users Right Now</div>
        <div className='font-bold text-4xl '>20,000+</div>
        </div>
      </div>
      <img src={LandingImage} alt='landing img' className='bg-white w-1/2 scale-125 z-0'/>
    </div>
  );
};

export default Landing;
