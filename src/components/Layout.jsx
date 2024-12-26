import React from 'react'
import NavBar from './NavBar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from './ErrorBoundary'

export const Layout = () => {
  return (
    <div>
        <NavBar />
        <ErrorBoundary>
        <Outlet />
        </ErrorBoundary>
        <Footer />
    </div>
  )
}
