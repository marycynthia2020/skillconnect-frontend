'use client'
import { createContext, useContext } from "react"

interface userProps {
  firstName: string,
  lastName: string,
  role: string
}

 const user:userProps = {
    firstName: "",
    lastName: "",
    role: "client"
  }
export const userContext = createContext(user)

export const UserProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
 
  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  )
}