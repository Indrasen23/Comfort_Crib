import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";



const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className="relative w-full bg-black pt-10">
            <div className="mx-auto w-[70%] max-w-7xl px-8">
                
                <Link to='/about'>
                <div className="flex w-full flex-col items-center pb-8  justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-white md:mb-0"
                    >
                        &copy; {currentYear} ComfortCrib. All
                        Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-white sm:justify-center">
                            <div><FaLinkedin /></div>
                            <div><CgMail /></div>
                            <div><FaGithub /></div>
                            <div><FaInstagram /></div>
                    </div>
                </div>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;