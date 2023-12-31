import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const animate1 = useRef(null)
  const isInView1 = useInView(animate1)
  return (
    <>
      <div className="bg-[#FFF6EB]">
        <div className="flex container mx-auto lg:flex-row flex-col-reverse">
          {/* left container */}
          <div className="flex-1 items-center flex justify-center text-center lg:text-start"
          ref={animate1} style={{
            transform: isInView1 ? "none" : "translateX(-100px)",
            opacity: isInView1 ? "1" : "0",
            transition: "all 1.8s",
        }}
          >
            <h1 className="lg:text-4xl text-2xl p-4 lg:p-0 font-semibold !tracking-wider !leading-[50px]"> <span className="text-main">Task Vault</span> :  Your Ultimate Task Management Solution! <br /> For :  <span>
            <Typewriter
              words={["Revolutionize Your Productivity", "Organize Your Journey", " Achieve Goals with Precision", " Your Key to Meeting Deadlines"," Maximize Efficiency for Work-Life"]}
              loop={5}
              cursor
              cursorStyle="."
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
            </span> <br />
            <Link to={'/dashboard/tasks'}>
            <button  className="border-b-4  bg-black text-white border-b-main rounded-sm px-4 py-2 text-center text-xl mt-4">Let's Explore</button>
            </Link>
            </h1>
          </div>
          {/* right container */}
          <div ref={animate1} style={{
                        transform: isInView1 ? "none" : "scale(0)",
                        opacity: isInView1 ? "1" : "0",
                        transition: "all 1.7s",
                    }} className="flex-1">
            <img src="https://i.ibb.co/T4wPNMx/Untitled-design.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
