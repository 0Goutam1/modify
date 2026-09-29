import {  createContext, useState } from "react";

export const SongContext = createContext()

export const SongProvider= ({children})=>{


    const [song, setsong] = useState(null)
    const [loading, setloading] = useState(false)
    return(
        <SongContext.Provider value={{song,setsong,loading,setloading}}>
            {children}
             </SongContext.Provider>
    )
}

