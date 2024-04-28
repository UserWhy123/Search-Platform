import { Link } from "react-router-dom"
import MainNav from "./MainNavbar";
import MobilNav from "./MobilNavbar";

const  Header = () => {
    return (

    <div className="bg-blue-500  py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold tracking-tight text-black-500">
                bestil madvare
            </Link>
            <div className="md:hidden">
            </div>
            <div className="hidden md:block">
                <MainNav/>
            </div>
            <div className="md:hidden">
                <MobilNav/>
            </div>

        </div>
    </div>
    )
}

export default Header
