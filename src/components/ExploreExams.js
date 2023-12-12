import { ExamsDetails } from "../utils/Data"

const ExploreExams = () => {
    return (
        <div className='h-screen w-full px-48 flex flex-col justify-start items-center gap-y-12'>
            <div className='flex w-full justify-between items-center'>
                <span className='text-[#1D4645] text-4xl font-bold capitalize '>Explore Our Quiz Categories</span>
                <button className='border border-[#1D4645] p-3 uppercase rounded-md w-36 flex justify-center items-center'>Explore All</button>
            </div>
            <div className='flex flex-wrap w-full gap-12 [&>*]:w-80 [&>*]:h-80  justify-between '>
                {ExamsDetails.map((exam) => {
                    return (
                        <div className={`${exam.bgColor} ${exam.textColor} px-3 rounded-md flex flex-col justify-center items-center p-2 gap-y-4 
                                        shadow-xl shadow-gray-400  cursor-pointer hover:transition-transform hover:scale-[105%] hover:duration-300`}>
                            <img src={exam.image} alt="linux img" className='w-20 bg-white rounded-full'/>
                            <div className='font-bold text-lg'>{exam.name}</div>
                            <div className='font-extralight text-sm h-24 overflow-clip flex items-center justify-center'>{exam.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreExams