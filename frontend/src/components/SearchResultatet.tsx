import { Butik } from "@/types"
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Banknote, Clock, Dot } from "lucide-react";


type Props = {
    butik: Butik;
};

const SearchResultsCard = ({ butik }: Props) => {

    return (
        <Link 
            to={`/detail/${butik._id}`} 
            className="grid lg:grid-cols-[2fr_3fr] gap-5 group">
                <AspectRatio ratio={16 / 6}>
                    <img src={butik.imageUrl} 
                    className="rounded-md w-full h-full object-cover"/>
                </AspectRatio>
                <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline">
                    {butik.butikNavn}
                </h3>
                <div id="card-content" className="grid md:grid-cols-2 gap-2">
                    <div className="flex flex-row flex-wrap">
                        {butik.menu.map((item, index) => (
                            <span key={item} className="flex">
                                <span>{item}</span>
                                {index < butik.menu.length - 1 && <Dot/>}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2 flex-col">
                        <div className="flex items-center gap-1 text-green-600">
                            <Clock/>
                            {butik.ForventetLeveringsTid} mins
                        </div>
                        <div className="flex items-center gap-1">
                            <Banknote/>
                            Delivery from ${(butik.leveringsPris / 100).toFixed(2)}
                        </div>
                    </div>
                </div>
                </div>
        </Link>
    )
}

export default SearchResultsCard