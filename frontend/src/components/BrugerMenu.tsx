import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";


const BrugerNavnMenu = () => {

   
    return(

            <DropdownMenu>
                jjjjj
                <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
                
                </DropdownMenuTrigger>
                <DropdownMenuContent>
{/* Butikker del kode............................................................ */}
                    <DropdownMenuItem>
                        <Link to="/manage-restaurant" 
                        className="font-bold hover:text-orange-500">
                            redigere butik
                        </Link>
                    </DropdownMenuItem>
{/* bruger profile kode............................................................ */}
                    <DropdownMenuItem>
                        <Link to="/user-profile" 
                        className="font-bold hover:text-orange-500">
                            bruger Profile
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Button className="flex flex-1 font-bold bg-orange-500">
                            Logout
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    )
}

export default BrugerNavnMenu