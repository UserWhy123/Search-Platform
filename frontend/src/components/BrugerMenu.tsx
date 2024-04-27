import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";


const UsernameMenu = () => {

    const {user, logout} = useAuth0();


    return(

            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
                {user?.email}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
{/* Restaurant part............................................................ */}
                    <DropdownMenuItem>
                        <Link to="/manage-restaurant" 
                        className="font-bold hover:text-orange-500">
                            redigere butik
                        </Link>
                    </DropdownMenuItem>
{/* user profile part............................................................ */}
                    <DropdownMenuItem>
                        <Link to="/user-profile" 
                        className="font-bold hover:text-orange-500">
                            bruger Profile
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Button onClick={() => logout()} className="flex flex-1 font-bold bg-orange-500">
                            Logout
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    )
}

export default UsernameMenu