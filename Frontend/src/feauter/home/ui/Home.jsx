import FaceExpression from "../../expression/face.expression"
import PlayList from "../component/PayList"
import Player from "../component/Player"
import {useSong} from "../hook/useSong"
import "./home.scss"
const Home = () => {

  const {handleGetSong,loading} = useSong()
  return (
     <main>
      <div className="left"></div>
    <div className="center">
      <FaceExpression
                onClick={(expression) => { handleGetSong({ mood: expression }) }}
            />
    </div>
             <div className="right">
                <PlayList/>
             </div>

           <div className="bottom">
              <Player />
           </div>
           
   </main>
  )
}

export default Home
