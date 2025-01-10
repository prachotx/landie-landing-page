import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
    return (
        <div className='bg-[#E7ECFF]'>
            <Wrapper>
                <div>
                    <div className='flex justify-between items-center py-[35px] border-b-[2px] border-[#CDD1D4]'>
                        <p className='text-[#939EA4] text-[14px]'>©2023 Yourcompany</p>
                        <h2 className='text-[#37447E] text-[26px] font-black' >Landing</h2>
                        <button className='w-[109px] h-[26px] bg-[#111B47] text-white rounded text-[12px]'>Purchase Now</button>
                    </div>
                    <div className='flex justify-between my-[13px]'>
                        <div className='w-[245px]'>
                            <ul className='flex justify-between'>
                                <li className='text-[#929ECC] text-[14px]'><a href="">Home</a></li>
                                <li className='text-[#929ECC] text-[14px]'><a href="">About</a></li>
                                <li className='text-[#929ECC] text-[14px]'><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className='w-[160px]'>
                            <ul className='flex justify-between'>
                                <li className='text-[#B0B8BC]'><a href=""> <FaFacebookF /> </a></li>
                                <li className='text-[#B0B8BC]'><a href=""> <FaTwitter /> </a></li>
                                <li className='text-[#B0B8BC]'><a href=""> <FaYoutube /> </a></li>
                                <li className='text-[#B0B8BC]'><a href=""> <FaInstagram /> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer