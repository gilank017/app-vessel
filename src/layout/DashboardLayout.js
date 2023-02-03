import React from 'react'
import Headers from '../components/ui/Headers'
import Sidebar from '../components/ui/Sidebar'
import { useState } from 'react'
import '../static/css/layout.css'


export default function DashboardLayout({children}) {
  const [sidebar, setSidebar ] = useState(true)
  const toggleSidebar = (sidebar) => {
    setSidebar(sidebar)
  }
  return (
    <div>
      <Headers setSidebar={toggleSidebar}/>
      <div>
        <Sidebar showSidebar={sidebar} />
        <div className={sidebar ? 'main-content': 'main-content no-sidebar'}>
          <div className='page-content'>
            <main style={{ padding: '80px 0px' }}>{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}
