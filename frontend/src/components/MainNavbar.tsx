import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import BrugerMenu from "./BrugerMenu";



const MainNav =() => {
    // Bruge af useAuth0 hook fra Auth0 biblioteket for at hente loginWithRedirect og isAuthenticated.
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return (
 
        //  Jeg tjekker isAuthenticated for at bestemme, hvilket element der skal vises.
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? ( 
                // Hvis brugeren er autoriseret, vises BrugerMenu.
                <BrugerMenu/> 
            ) : (
                // Hvis brugeren ikke er autoriseret, vises login .
                <Button 
                    variant="ghost" 
                    className="font-bold hover:text-orange-500 hover-bg-white" 
                    // Funktionen der kaldes ved klik. Denne funktion starter login process.
                    onClick={async () => await loginWithRedirect()}> 
                    Login
                </Button>
            ) }
        </span>
    )
}

export default MainNav