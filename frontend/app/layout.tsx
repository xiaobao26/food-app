import React from "react"
import Navigation from "./components/Navigation"
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Food App</title>
            </head>
            <body>
                {/* Global navigation bar */}
                <Navigation />

                {/* render the pages (home, auth, admin)*/}
                {children}
            </body>
        </html>
    )
}