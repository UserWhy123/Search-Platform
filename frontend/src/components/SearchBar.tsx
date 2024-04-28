import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";



// Import af Zod biblioteket og definerering af skema for formularobjektet. validerering,
// at searchQuery er en streng og kræver fejlmeddelelse, hvis feltet er tomt.
const formSchema = z.object({
    searchQuery: z.string({
        required_error: "Butik navn skal skrives",
    }),
});

// Eksport af en type `SearchForm`, der automatisk genereres baseret på formSchema.
export type SearchForm = z.infer<typeof formSchema>;

// Definition af 'Props' type, som indeholder egenskaberne for 'SearchBar' komponenten.
type Props = {
    onSubmit: (FormData: SearchForm)=> void; // Funktion, der kaldes, når formularen indsendes korrekt.
    placeholder: string; // Placeholder tekst for input feltet.
    onReset?: () => void; // Valgfri funktion der kaldes, når formularen nulstilles.
    searchQuery: string; // Startværdien for søgefeltet.
};

// Definition af 'SearchBar' komponenten, der tager 'Props' som input.
const SearchBar = ({onSubmit, onReset, placeholder, searchQuery}: Props) =>{
    // Opretter en formular instans ved brug af 'useForm' hook, der integrerer Zod validering via 'zodResolver' og angiver standardværdier.

    const form = useForm<SearchForm>({
           // Fortsætter opsætning af 'useForm' hvor 'resolver' angiver metoden til validering af formulardata, her baseret på 'formSchema' gennem 'zodResolver'.
    resolver: zodResolver(formSchema),

    // Angiver standardværdierne for formularen, hvor 'searchQuery' sættes til værdien fra props.
    defaultValues: { 
        searchQuery,
    }
});

// Bruger 'useEffect' hook til automatisk at nulstille formularen, når 'searchQuery' ændres. Dette sikrer, at formularen altid reflekterer den nuværende søgeforespørgsel.
useEffect(() =>{
    form.reset({ searchQuery })  // Nulstiller formularen med den aktuelle værdi af 'searchQuery'.
}, [form, searchQuery]);  // Afhængigheder for 'useEffect', hvilket betyder at effekten kører, når enten 'form' eller 'searchQuery' ændres.

// Definition af 'handleReset' funktionen, som nulstiller formularen og udfører en yderligere handling, hvis den er defineret.
const handleReset = () => {
    form.reset({
        searchQuery: "",  // Nulstiller 'searchQuery' til en tom streng.
    });

    // Tjekker om 'onReset' prop er givet og udfører funktionen, hvis den er til stede.
    if(onReset){
        onReset();
    };
};


    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} 
            className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3
            ${form.formState.errors.searchQuery && "border-red-500"
            }`}>
                <Search strokeWidth={2.5} size={30} 
                className="ml-1 text-orange-500 md-block"/>
                <FormField 
                control={form.control} 
                name="searchQuery" 
                render={({field})=> (<FormItem className="flex-1">
                    <FormControl>
                        <Input {...field} 
                        className="border-none shadow-none text-xl focus-visible:ring-0"
                        placeholder={placeholder}/>
                    </FormControl>
                </FormItem>)}
                />
                <Button 
                    onClick={handleReset} 
                    type="button" 
                    variant="outline" 
                    className="rounded-full">
                        Slet
                </Button>
                <Button type="submit" className="rounded-full bg-orange-500">Søge</Button>

            </form>
        </Form>
    )
};

export default SearchBar