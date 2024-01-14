import { NavLink } from "react-router-dom";
import {ReactComponent as ExpPerImg} from "../assets/expertise&percision.svg";
import {ReactComponent as TaiApImg} from "../assets/decision-making.svg";
import {ReactComponent as QAImg} from '../assets/quality.svg';
import {ReactComponent as InovImg} from '../assets/bulb.svg';
import {ReactComponent as TruckImg} from '../assets/cargo-truck.svg';
import {ReactComponent as ServicesImg} from '../assets/database.svg';
import {ReactComponent as RefridgeImg} from '../assets/snowflake.svg';
import {ReactComponent as ARAICertImg } from '../assets/truck.svg';

const Home = ({ data }) => {
  return (
    <div className=" flex flex-col align-center justify-start">
      <div className=" bg-hero-bg h-[94vh] flex flex-col items-center justify-center bg-cover sm:bg-bottom-4 md:bg-center bg-center bg-no-repeat">
        <h1 className=" font-inter font-extrabold text-[48px] text-white text-center my-5 w-[70%]">
          Welcome to Black Swan Engineering
        </h1>
        <h2 className=" font-inter font-medium text-[25px] text-white text-center w-[60%] mb-4">
          Leading truck container manufacturing with unparalleled innovation.
        </h2>
        <div className=" flex flex-row items-center gap-10">
          <NavLink to="/products" className=" primary-button">
            See Products
          </NavLink>
          <NavLink to="/contact-us" className=" secondary-button">
            Contact Us
          </NavLink>
        </div>
      </div>
      {/* why choose us section */}
      <div className=" flex flex-col items-center justify-center gap-10 h-fit my-10">
        <h2 className=" font-inter font-bold text-[24px] text-center my-5">
          Why Choose Black Swan?
        </h2>
        <div className=" flex felx-row items-center justify-center flex-wrap gap-10">
          <div className=" h-[150px] w-[150px] rounded-md flex flex-col items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <ExpPerImg fill="#333" width='75px' height='75px'/>
            <h3 className="  font-inter text-center font-semibold my-2">
              Expertise and Precision
            </h3>
          </div>

          <div className=" h-[150px] w-[150px] rounded-md flex flex-col items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <QAImg fill="#333" width='75px' height='75px'/>
            <h3 className="  font-inter text-center font-semibold my-2">
              Quality Assurance
            </h3>
          </div>

          <div className=" h-[150px] w-[150px] rounded-md flex flex-col items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <TaiApImg fill="#333" width='75px' height='75px'/>
            <h3 className="  font-inter text-center font-semibold my-2">
              Tailored Approch
            </h3>
          </div>

          <div className=" h-[150px] w-[150px] rounded-md flex flex-col items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <InovImg fill="#333" width='75px' height='75px'/>
            <h3 className="  font-inter text-center font-semibold my-2">
              Innovation in Motion
            </h3>
          </div>
        </div>
      </div>
      {/* end section */}
      {/* About us section */}
      <div>
        <h2 className=" font-inter font-bold text-[24px] text-center my-5">
          About Us
        </h2>
        <div className=" bg-about-bg h-fit w-full p-20 flex flex-col items-center justify-center bg-no-repeat bg-cover">
          <div className=" bg-white h-full w-full rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-start justify-start md:flex-row lg:w-[95%] p-10 xl:w-[60%] 2xl:w-[50%]">
            <div className=" flex flex-col items-start justify-start h-fit w-full p-4">
              <h3 className=" font-inter font-bold text-[18px] text-center lg:text-[20px]">
                Our Mission:
              </h3>
              <p className=" font-inter font-light text-[14px] text-justify md:left lg:text-[18px] mt-3">
                Our mission is to create groundbreaking engineering solutions
                that surpass clients' expectations, achieved through
                collaboration and diverse expertise on complex projects for
                lasting impact.
              </p>
              <h3 className=" font-inter font-bold text-[18px] text-center  lg:text-[20px] mt-4">
                Our Vision:
              </h3>
              <p className=" font-inter font-light text-[14px] text-justify md:left lg:text-[18px] mt-3">
                Lead the engineering industry with groundbreaking solutions,
                exceed client expectations, and leave a lasting legacy through
                transformative projects.
              </p>
            </div>
            <div className=" flex flex-col items-start justify-start h-fit w-full p-4">
              <h3 className=" font-inter font-bold text-[18px] text-center lg:text-[20px]">
                Our Story:
              </h3>
              <p className=" font-inter font-light text-[14px] text-justify md:left lg:text-[18px] mt-3">
                At Black Swan Engineering, our journey began 2023 with a vision
                to redefine the standards of engineering excellence. Over the
                years, we have evolved, adapted, and overcome challenges,
                growing into a team of dedicated professionals driven by a
                shared commitment to innovation and quality.
              </p>
              <NavLink
                className=" primary-button my-5 border-2 border-red-300"
                to="/about-us"
              >
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* about us section end*/}

      {/* products section */}
      <div className=" flex flex-col items-center justify-center gap-10 h-fit my-10">
        <h2 className="font-inter font-bold text-[24px] text-center my-5">
          Our Products
        </h2>
        <div className=" flex felx-row items-center justify-center flex-wrap gap-10 my-3">
          <div className=" h-[250px] w-[200px] rounded-md flex flex-col items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2">
            <div className=" h-[100px] w-[100px] p-4 rounded-full bg-red-600 flex items-center justify-center">
            <TruckImg width='70%' height='70%' fill='#fff'/>
            </div>
            <h3 className="  font-inter text-center font-medium mt-2 text-[14px]">
              Transport Refridgeration
            </h3>
            <p className=" font-inter text-center font-light text-[14px] mt-2">Trucks & trailers refrigeration, Insulated & cargo containers for perishable goods.</p>
          </div>

          <div className=" h-[250px] w-[200px] rounded-md flex flex-col items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2">
            <div className=" h-[100px] w-[100px] p-4 rounded-full bg-red-600 flex items-center justify-center">
            <RefridgeImg width='70%' height='70%' fill='#fff'/>
            </div>
            <h3 className="  font-inter text-center font-medium mt-2 text-[14px]">
                Commercial Refridgeration
            </h3>
            <p className=" font-inter text-center font-light text-[14px] mt-2">Turnkey Cold storage solutions to Industrial refrigeration for retail and wholesale industries.</p>
          </div>

          <div className=" h-[250px] w-[200px] rounded-md flex flex-col items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2">
            <div className=" h-[100px] w-[100px] p-4 rounded-full bg-red-600 flex items-center justify-center">
            <ARAICertImg width='70%' height='70%' fill='#fff'/>
            </div>
            <h3 className="  font-inter text-center font-medium mt-2 text-[14px]">
                ARAI Certified Truck Body Containers
            </h3>
            <p className=" font-inter text-center font-light text-[14px] mt-2">Custom truck bodies: steel, aluminum, GRP.</p>
          </div>

          <div className=" h-[250px] w-[200px] rounded-md flex flex-col items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2">
            <div className=" h-[100px] w-[100px] p-4 rounded-full bg-red-600 flex items-center justify-center">
            <ServicesImg width='70%' height='70%' fill='#fff'/>
            </div>
            <h3 className="  font-inter text-center font-medium mt-2 text-[14px]">
            Services
            </h3>
            <p className=" font-inter text-center font-light text-[14px] mt-2">All kinds of after sales servicing in all commercial refirgreration & HVACR equipments.</p>
          </div>
        </div>
        <NavLink className=' primary-button my-2 border-2 border-red-300' to='/products'>View All Products</NavLink>
      </div>
      {/* products section end */}
    </div>
  );
};

export default Home;
