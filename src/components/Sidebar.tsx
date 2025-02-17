import type React from "react"
import { X, Home, BarChart2, Users, Settings } from "lucide-react"
import { Link } from "@tanstack/react-router"

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-background text-white w-64 space-y-6 p-8 absolute inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
    >
      <button className="absolute top-1 right-1 md:hidden" onClick={toggleSidebar}>
        <X size={24} />
      </button>
      <nav>
        <Link to="/" className=" text-text no-underline block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link to="/student" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <BarChart2 className="inline-block mr-2" size={20} />
          Students
        </Link>
        <Link to="/attendance" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Users className="inline-block mr-2" size={20} />
          Attendance
        </Link>
        <Link to="/qrcodegenerator" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Settings className="inline-block mr-2" size={20} />
          Generate Qr
        </Link>
        {/* <Link to="/qrcodescanner" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Settings className="inline-block mr-2" size={20} />
          Scan Qr
        </Link> */}
      </nav>
    </div>
  )
}

export default Sidebar

