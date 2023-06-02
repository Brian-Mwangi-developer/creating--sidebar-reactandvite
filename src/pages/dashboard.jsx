import React, { useState } from "react";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import {BsPersonCircle} from "react-icons/bs"
import profilepic from "../assets/profile.jpg"
import { Profile } from "../components/profile";

export function Dashboard() {
    const [open, setOpen] = useState(true);
  
    return (
      <div>
        <div className="flex">
          <div className={`${open ? "w-72" : "w-20"} duration-500 bg-green-400 h-screen relative`}>
            {open && (
              <>
                <Profile name="John Doe" title="Software Developer" image={<img src={profilepic} alt="Profile" />} />
                <HiMenuAlt3
                  color="white"
                  className={`h-6 w-6 mr-3 cursor-pointer absolute -right-0 top-3`}
                  onClick={() => setOpen(!open)}
                />
              </>
            )}
            {!open && (
              <>
                <Profile name="" title="" image={<BsPersonCircle />} />
                <HiMenuAlt2
                  color="white"
                  className={`h-6 w-6 mr-3 rounded-lg cursor-pointer absolute -right-0 top-3`}
                  onClick={() => setOpen(!open)}
                />
              </>
            )}
          </div>
          <div className="pl-6 text-7xl">Welcome</div>
        </div>
      </div>
    );
  }
  
