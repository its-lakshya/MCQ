import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='w-full h-[25rem] bg-[#1D4645] mt-10 px-48 flex flex-col items-center justify-center font-extralight gap-y-12
                        max-xl:px-20 max-xl:py-10 max-sm:px-10 max-xs:text-sm max-xxs:px-4'>
            <div className='flex justify-between items-center w-2/3 text-white max-lg:w-full'>
                <div className='flex flex-col items-center justify-center gap-y-2'>
                    <span className='text-[#E8C5B0] text-lg font-semibold'>Menu</span>
                    <span>About</span>
                    <span>Searvice</span>
                    <span>Blog</span>
                    <span>Content</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-2'>
                    <span className='text-[#E8C5B0] text-lg font-semibold'>Exams</span>
                    <span>Exam 1</span>
                    <span>Exam 2</span>
                    <span>Exam 3</span>
                    <span>Exam 4</span>
                </div>
                <div className='flex items-center justify-center gap-x-4 text-[#1D4645] max-xxs:flex-col max-xxs:gap-y-2'>
                    <span className='bg-[#E8C5B0] w-12 h-12 max-md:w-8 max-md:h-8 rounded-full flex items-center justify-center'><FaFacebookF/></span>
                    <span className='bg-[#E8C5B0] w-12 h-12 max-md:w-8 max-md:h-8 rounded-full flex items-center justify-center'><FaTwitter/></span>
                    <span className='bg-[#E8C5B0] w-12 h-12 max-md:w-8 max-md:h-8 rounded-full flex items-center justify-center'><FaInstagram/></span>
                </div>
            </div>
            <div className='text-white flex w-full justify-between items-center text-sm border-t py-12 max-md:text-xs max-xxs:flex-col max-xxs:gap-y-3 max-xxs:text-center'>
                <div>Copyright © 2022 MCQ. All Rights Reserved.</div>
                <div className="flex gap-x-4 ">
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;