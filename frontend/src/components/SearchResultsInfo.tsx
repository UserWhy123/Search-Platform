import { Link } from "react-router-dom";


type Props = {
    total: number;
    by: string;
}

const SearchResultsInfo = ({total, by}: Props) => {

    return(
        <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:float-row">
            <span>
                {total} butikker fundet i {by}
                <Link to="/" className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500">
                    ændrer lokationen
                </Link>
            </span>
        </div>
    )
}

export default SearchResultsInfo;