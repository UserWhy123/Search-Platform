import { Butik } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dot} from "lucide-react";


type Props = {
    butik: Butik;
};

const ButikInfo = ({butik}: Props) =>{

    return (
    <Card>
        <CardHeader className="border-slate-300">
            <CardTitle className="text-3xl font-bold tracking-tight">
                {butik.butikNavn}
            </CardTitle>
            <CardDescription>
                {butik.By}, {butik.land}
            </CardDescription>
        </CardHeader>

        <CardContent className="flex">
            {butik.menu.map((menu, index)=> (
                <span key={menu + index} className="flex">
                    <span>{menu}</span>
                    {index < butik.menu.length -1 && <Dot/>}
                </span>
            ))};
        </CardContent>
    </Card>
    );

};

export default ButikInfo;