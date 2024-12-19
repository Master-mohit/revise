import React, { createContext, useState } from 'react'
export const mycontext = createContext();


const Contexttt = ({children}) => {
    const [into, setinto] = useState(2)
  return (
    <div>
      <mycontext.Provider value={{into, setinto}}>
            {children}
      </mycontext.Provider>
    </div>
  )
}

export default Contexttt
