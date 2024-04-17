import { Link } from "react-router-dom";
import creator1 from ".././assets/creator1.jpeg";
import creator2 from ".././assets/creator2.jpg";
import creator3 from ".././assets/creator3.jpg";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function About() {
  let email1 = "kunjilal976@gmail.com";
  let linkedIn1 = "https://www.linkedin.com/in/kunji-lal-meena-560b59253";
  let email2 = "indrasenchauhan333@gmail.com";
  let linkedIn2 = "https://www.linkedin.com/in/indrasen-chauhan-62222b258";
  let email3 = "mishrasarthak3702@gmail.com";
  let linkedIn3 = "https://www.linkedin.com/in/sarthak-mishra-914a16239/";

  const sendEmail1 = () => {
    window.open(`mailto: ${ email1 }`, "_blank");
  };
  const openLinkedIn1 = () => {
    window.open(linkedIn1, "_blank ");
  };

  const sendEmail2 = () => {
    window.open(`mailto: ${ email2 }`, "_blank");
  };
  const openLinkedIn2 = () => {
    window.open(linkedIn2, "_blank ");
  };

  const sendEmail3 = () => {
    window.open(`mailto: ${ email3 }`, "_blank");
  };
  const openLinkedIn3 = () => {
    window.open(linkedIn3, "_blank ");
  };

  
  return (
    <div className="min-h-screen text-white flex flex-col ">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">About Our Website</h2>
        <p className="text-lg mb-8">
          RoomieRent is a leading real estate agency that specializes in helping clients buy, sell,
          and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated
          to providing exceptional service and making the buying and selling process as smooth as possible.
        </p>
        <h1 className="text-3xl font-bold mb-8 text-blue-500">About Us</h1>
        <p className="text-lg mb-8">
          Welcome to our website! Our mission is to help our clients achieve their real estate goals by providing expert advice,
          personalized service, and a deep understanding of the local market.Whether you are looking to buy, sell, or rent a property,
          we are here to help you every step of the way.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Meet the Creators</h2>
        <div className="flex flex-col justify-around mb-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2 text-violet-500">Kunji Lal Meena</h3>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
              <div className="mx-auto">
                <img src={creator1} alt="Creator 1" className="w-[200px] h-[200px] rounded-full mb-4" />
                <ul className="flex gap-2 list-none pl-16">
                  <li><Link href="/" onClick={sendEmail1} className="w-8 h-8 flex gap-2 rounded-full pt-[6px] hover:text-blue-500">
                    <HiOutlineMail /></Link>
                  </li>
                  <li><Link href="/" onClick={openLinkedIn1} className="w-8 h-8 inline-block rounded-full  pt-[6px] hover:text-blue-500">
                    <FaLinkedin /></Link>
                  </li>
                </ul>
              </div>
              <div>
                <p>I am a passionate MERN stack developer with a knack for crafting robust and efficient web applications. With a strong
                  foundation in JavaScript, I specialize in building dynamic and responsive websites using MongoDB, Express.js, React.js, and Node.js.</p>
                <p>My journey into the world of web development began with a deep curiosity and a desire to create meaningful digital experiences.
                  I have honed my skills through hands-on projects and continuous learning, allowing me to stay updated with the latest trends and technologies in the industry.
                </p>
                
                
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-around mb-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2 text-violet-500">Indrasen Chauhan</h3>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
              <div className="mx-auto">
                <img src={creator2} alt="Creator 1" className="w-[200px] h-[200px] rounded-full mb-4" />
                <ul className="flex gap-2 list-none pl-16">
                  <li><Link href="/" onClick={sendEmail2} className="w-8 h-8 flex gap-2 rounded-full pt-[6px] hover:text-blue-500">
                    <HiOutlineMail /></Link>
                  </li>
                  <li><Link href="/" onClick={openLinkedIn2} className="w-8 h-8 inline-block rounded-full  pt-[6px] hover:text-blue-500">
                    <FaLinkedin /></Link>
                  </li>
                </ul>
              </div>
              <div>
                <p>I am a Mechanical Engineering student at the National Institute of Technology, Kurukshetra, with a passion for technology and a knack for problem-solving. I am an enthusiastic MERN stack developer dedicated to creating powerful and scalable web solutions. Armed with a solid grasp of JavaScript, I excel in developing interactive and adaptive websites leveraging MongoDB, Express.js, React.js, and Node.js.</p>
                <p>My venture into web development was fueled by an innate curiosity and a passion for crafting impactful online experiences. I have sharpened my expertise through practical projects and ongoing education, ensuring I remain at the forefront of the ever-evolving web development landscape.</p>
                
                
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-around mb-8">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2 text-violet-500">Sarthak Mishra</h3>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
              <div className="mx-auto">
                <img src={creator3} alt="Creator 1" className="w-[200px] h-[200px] rounded-full mb-4" />
                <ul className="flex gap-2 list-none pl-16">
                  <li><Link href="/" onClick={sendEmail3} className="w-8 h-8 flex gap-2 rounded-full pt-[6px] hover:text-blue-500">
                    <HiOutlineMail /></Link>
                  </li>
                  <li><Link href="/" onClick={openLinkedIn3} className=" w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500">
                    <FaLinkedin /></Link>
                  </li>
                </ul>
              </div>
              <div>
                <p> am a passionate MERN stack developer with a knack for crafting robust and efficient web applications. With a strong
                  foundation in JavaScript, I specialize in building dynamic and responsive websites using MongoDB, Express.js, React.js, and Node.js.</p>
                <p>My journey into the world of web development began with a deep curiosity and a desire to create meaningful digital experiences.
                  I have honed my skills through hands-on projects and continuous learning, allowing me to stay updated with the latest trends and technologies in the industry.
                </p>
                
                
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}