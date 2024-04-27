import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";


const Forside = () => {

    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm) =>{
        navigate(`/search/${searchFormValues.searchQuery}`);
    };


    return(

        <div className="flex flex-col gap-12">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center ">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    køb lækre retter, eller friske råvare
                </h1>
                <span className="text-xl"> bestil fra din favorit butik</span>
                <SearchBar 
                    placeholder="Search by city"
                    onSubmit={handleSearchSubmit} searchQuery={""}/>
            </div>
        </div>
    )
}

export default Forside