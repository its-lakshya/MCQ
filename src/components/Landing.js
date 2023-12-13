import LandingImage from "../assets/LandingImage.svg"

const Landing = () => {
  return (
    <div className="flex justify-between items-center px-48 h-screen -mt-10 gap-x-1 max-xl:px-20 max-sm:px-10 max-xxs:px-4">
      <div className="flex flex-col items-streatch justify-center gap-y-4 w-1/2 z-10 max-md:w-full">
            <div className='text-[#1D4645] text-7xl w-92 font-bold max-xl:text-6xl max-lg:text-5xl max-xxs:text-4xl'>MCQ <br></br>WITH YOU IN EVERY PREPRATION !</div>
            <div className='text-lg text-light max-xxs:text-sm'>We help you to prepare best.</div>
            <div className="flex flex-col gap-y-1">
                <div className='text-xl uppercase text-[#1D4645] max-xxs:text-base'>Number of Active Users Right Now</div>
                <div className='font-bold text-4xl '>20,000+</div>
            </div>
      </div>
      <img src={LandingImage} alt='landing img' className='bg-white w-1/2 scale-125 z-0 max-md:hidden'/>
    </div>
  );
};

export default Landing;
