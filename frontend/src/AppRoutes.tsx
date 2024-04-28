import { Navigate, Route, Routes} from "react-router-dom"
import Layout from "./layouts/layout"
import Forside from "./pages/Forside"




const AppRoutes = () =>{

    return(
        <Routes>
            <Route path="/" element={<Layout><Forside/></Layout>}/>
            <Route path="/bruger-profile" element={<Navigate to="/"/>}/>
        </Routes>
    )
}

export default AppRoutes


