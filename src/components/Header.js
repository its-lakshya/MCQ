import { useSelector } from "react-redux";

const Header = () => {

    const currentUser = useSelector((store) => store.signinDetails.currentUser);

    return(
        <div className='w-full h-20 font-bold flex justify-center bg-white bg-opacity-95 shadow-lg '>
            <div className='w-full px-48 flex justify-between items-center max-lg:w-full max-xl:px-20 max-sm:px-10 max-xxs:px-4'>
            <span className="font-bold text-3xl text-[#1D4645] -mt-2 max-sm:text-2xl">MCQ</span>
            <ul className='flex justify-center gap-x-10 font-light max-md:gap-x-4  max-sm:hidden'>
                <button className='hover:scale-[110%]'>About</button>
                <button className='hover:scale-[110%]'>Portfolio</button>
                <button className='hover:scale-[110%]'>Services</button>
                <button className='hover:scale-[110%]'>Blog</button>
            </ul>
            <button className="rounded-md flex justify-center items-center w-auto font-bold text-lg text-[#1D4645]">
                <span className='text-black font-light text-base'>
                    Hii! &nbsp; 
                </span>
                {currentUser.userName}
            </button>
            </div>
        </div>
    )
}

export default Header