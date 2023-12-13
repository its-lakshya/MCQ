import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { increaseScore } from "../store/ScoreSlice";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const McqQuestions = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const category = location.state.category;

    const [quizData, setQuizData] = useState();
    const [questionCount, setQuestionCount] = useState(0)
    const [selectedOption, setSelectedOption] = useState('');

    const authStatus = useSelector(
        (store) => store.authenticationDetails.isAuthenticated
    );

    
    useEffect(() => {
        getQuizData();
    }, []);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        if(quizData[questionCount].correct_answer === event.target.value){
            dispatch(increaseScore())
            console.log(quizData[questionCount].correct_answer, event.target.value, questionCount)
        }
    };

    const handleNext = () => {
        if(questionCount===9){
            navigate('/score');
        }
        else{
            setQuestionCount(questionCount+1);
            setSelectedOption("");
        }
    }

    const getQuizData = async () => {
        const apiKey = 'WzJbiXckcsJlxvyWelPRnhOldnHcnrp3Hgeij4Jy';
        const limit = 10;
        const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${limit}&category=${category}`;
        try{
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                setQuizData(data);
            } 
            else {
                console.error('Failed to fetch data');
            }
        }catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    if(quizData)
    return (
        <div className='bg-[#1D4645] w-full h-screen flex flex-col px-40 text-white items-center justify-center gap-y-12 py-24'>
            <div className='flex flex-col items-center justify-center gap-y-4'>
                <div className='font-bold text-5xl'>{category}</div>
                <div className='text-lg'>{questionCount+1}/10</div>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-10 w-full'>
                <div className='text-3xl font-semibold text-center w-full '>{quizData[questionCount].question}</div>
                <form className='flex flex-col gap-10 justify-center items-center text-[#1D4645] font-bold w-full [&>*]:rounded-xl 
                             [&>*]:p-4'>
                    <div className="flex flex-col justify-center items-start gap-y-10 [&>*]:bg-[#FFF2E6] w-full [&>*]:w-full [&>*]:h-16 [&>*]:rounded-lg">
                        {quizData[questionCount].answers.answer_a ?
                        <label className="flex items-center">
                            <input
                            type="radio" value="answer_a" checked={selectedOption === 'answer_a'} onChange={handleOptionChange}
                            className="m-4 w-6 h-6 accent-[#1D4645]"
                            />
                            {quizData[questionCount].answers.answer_a}
                        </label>
                        :
                        null}

                        {quizData[questionCount].answers.answer_b ?
                        <label className="flex items-center">
                            <input
                            type="radio" value="answer_b" checked={selectedOption === 'answer_b'} onChange={handleOptionChange}
                            className="m-4 w-6 h-6 accent-[#1D4645]"
                            />
                            {quizData[questionCount].answers.answer_b}
                        </label>
                        :
                        null}

                        {quizData[questionCount].answers.answer_c ?
                        <label className="flex items-center">
                            <input
                            type="radio" value="answer_c" checked={selectedOption === 'answer_c'} onChange={handleOptionChange}
                            className="m-4 w-6 h-6 accent-[#1D4645]"
                            />
                            {quizData[questionCount].answers.answer_c}
                        </label>
                        :
                        null}

                        {quizData[questionCount].answers.answer_d ?
                        <label className="flex items-center">
                            <input type="radio" value="answer_d" checked={selectedOption === 'answer_d'} onChange={handleOptionChange}
                            className="m-4 w-6 h-6 accent-[#1D4645]"
                            />
                            {quizData[questionCount].answers.answer_d}
                        </label>
                        :
                        null}

                    </div>
                </form>

            </div>
            <button className='border border-[#FFF2E6] p-4 rounded-3xl w-36 font-semibold hover:bg-[#FFF2E6] hover:bg-opacity-30 
                                flex items-center justify-center gap-x-3'
            onClick={()=> {handleNext()}}
            >
                Next 
                <IoIosArrowForward/>
            </button>
        </div>
    )
}

export default McqQuestions;