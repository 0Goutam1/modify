import { useContext } from "react";
import { SongContext } from "../SongContext";
import { getSong } from "../api/song.api";

export const  useSong= ()=>{


    const context= useContext(SongContext)
    const {song,setsong,loading,setloading}= context


     async function handleGetSong({ mood }) {
        setloading(true)

        const data = await getSong({ mood })
        
        setsong(data.song)
        
        setloading(false)
    }

    return ({ loading, song, handleGetSong })
}
