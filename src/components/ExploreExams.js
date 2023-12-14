import { ExamsDetails } from "../utils/Data"
import { useNavigate } from "react-router-dom";

const ExploreExams = () => {
    const navigate = useNavigate();

    const handleClick = (category) => {
        navigate('/mcq',{ state: category  });
    }

    return (
        <div className=' w-full px-48 flex flex-col justify-start items-center gap-y-12 max-xl:px-20 max-xl:py-10 max-sm:px-10 max-xxs:px-4 bg-red-300 my-12'>
            <div className='flex w-full justify-between items-center max-xxs:flex-col max-xxs:gap-y-4'>
                <span className='text-[#1D4645] text-4xl font-bold capitalize max-md:text-3xl max-xxs:text-2xl max-xxs:text-center'>Explore Our Exam Categories</span>
                <button className='cursor pointer border border-[#1D4645] p-3 max-xs:p-1 uppercase rounded-md w-36 flex justify-center items-center max-md:text-sm hover:bg-[#E8C5B0] hover:bg-opacity-30'>Explore All</button>
            </div>
            <div className='flex flex-wrap w-full gap-12 [&>*]:w-80 [&>*]:h-80  justify-between max-lg:gap-8 max-lg:[&>*]:w-[17.5rem] max-lg:[&>*]:h-[17.5rem]
                            max-md:[&>*]:w-56 max-md:[&>*]:h-56 max-xs:[&>*]:w-full max-xs:[&>*]:h-48 '>
                {ExamsDetails.map((exam) => {
                    return (
                        <div className={`${exam.bgColor} ${exam.textColor} px-3 rounded-md flex flex-col justify-center items-center p-2 gap-y-4 
                                        shadow-xl shadow-gray-400  cursor-pointer hover:transition-transform hover:scale-[105%] hover:duration-300`}
                        key={exam.name}
                        onClick={()=> handleClick({category:exam.name})}
                        >
                            <img src={exam.image} alt="linux img" className='w-20 bg-white rounded-full'/>
                            <div className='font-bold text-lg'>{exam.name}</div>
                            <div className='font-extralight text-sm h-24 overflow-clip flex items-center justify-center max-md:hidden'>{exam.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreExams