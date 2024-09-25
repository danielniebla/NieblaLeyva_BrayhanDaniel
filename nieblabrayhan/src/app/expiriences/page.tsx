import NavElement from "../components/navElement";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { TbArrowBack } from "react-icons/tb";
import { SiCoursera } from "react-icons/si";


export default function experience({ init = true }) {
  return (
    <div className="flex bg-db justify-around">
      <a href="/">
        <NavElement 
          description="introdution" 
          imagen={<FaHouseChimneyUser className="w-10 h-10" />} 
          init={!init} 
        />
      </a>
      <a href="expiriences">
        <NavElement 
          description="expiriences" 
          imagen={<FaPersonArrowUpFromLine className="w-10 h-10" />} 
          init={init} 
        />
      </a>
      <a href="/skills">
        <NavElement 
          description="skills" 
          imagen={<GiSkills className="w-10 h-10" />} 
          init={!init} 
        />
      </a>
      <a href="past">
        <NavElement 
          description="past" 
          imagen={<TbArrowBack className="w-10 h-10" />} 
          init={!init} 
        />
      </a>
      <a href="courses">
        <NavElement 
          description="courses" 
          imagen={<SiCoursera className="w-10 h-10" />} 
          init={!init} 
        />
      </a>
    </div>
  );
}
