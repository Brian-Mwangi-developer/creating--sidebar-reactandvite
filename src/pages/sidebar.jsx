import DashboardIcon from '@mui/icons-material/Dashboard';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PatientsIcon from '@mui/icons-material/People';
import AppointmentsIcon from '@mui/icons-material/EventNote';
import BillingsIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react'

 export function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus =[
    {title: "Dashboard", icon:<DashboardIcon />},
    {title: "Schedule", icon:<ScheduleIcon />},
    {title: "Patients", icon:<PatientsIcon />},
    {title: "Appointments", icon:<AppointmentsIcon />},
    {title: "Billings", icon:<BillingsIcon />},

  ]

  return (
    <>
      <div className='flex'>
        <div className={`${open ? "w-72": "w-20"}  duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}> 
          <img src='./src/assets/left.jpg' className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full border-2 border-dark-purple ${!open && "rotate-180"}`}
          onClick={()=>{setOpen(!open)}}/>
          <div>
            <div className='flex gap-x-4 items-center'>
              <img src='./src/assets/safaricom.png'
              className={`h-10 w-10 cursor-pointer duration-500 
              ${open && "rotate-[360deg]" }`}/>
              <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`  }>Safaricom</h1>
            </div>
            <ul className='mt-10 pt-8'>
                {Menus.map((menu, index)=>(
                  <li key={index} className={`mt-4 text-gray-300 text-sm font-semibold  flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md active:bg-lime-300`}>{menu.icon}
                  <span className={` ${!open && 'hidden'} origin-left duration-200` }>{menu.title}</span>
                  </li>
                ))}
            </ul>
          </div>
          
        </div>
        <div className='p-7 text-2xl font-semibold flex-1 h-screen' >
          <h1>Home Page</h1>
        </div>
      </div>
    </>
  )
}

