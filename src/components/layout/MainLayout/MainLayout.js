import React from 'react'
import { UpcomingEvents } from '../..'

import Sidebar from '../Sidebar/Sidebar'

import './MainLayout.css'

function MainLayout({ children }) {
    return (
        <div className="main__layout">
            <div className="main__layout--container">
                <div className="main__layout__sidebar">
                    <Sidebar />
                </div>
                <div className="main__layout__body">
                    {children}
                </div>
                <div className="main__layout__events">
                    <UpcomingEvents />
                </div>
            </div>
        </div>
    )
}

export default MainLayout
