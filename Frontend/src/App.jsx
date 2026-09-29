import { RouterProvider } from "react-router"
import { router } from "./AppRouter"
import "./style.scss"
import { AuthProvider } from "./feauter/auth/AuthContext"
import { SongProvider } from "./feauter/home/SongContext"
const App = () => {
  return (

<AuthProvider>
  <SongProvider>
      <RouterProvider router={router} />
    </SongProvider>
    </AuthProvider>
  )
}

export default App
