import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export const Route = createRootRoute({
  component: () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen)
    }

    return (
      <>
        <div className="flex h-screen bg-background p-4">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header toggleSidebar={toggleSidebar} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
              <h2 className="text-text text-xl">Student Attendance management</h2>
              <Outlet />
            </main>
          </div>
        </div>
        {/* <TanStackRouterDevtools /> */}
      </>
    )
  },
})