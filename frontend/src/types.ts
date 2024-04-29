
export type MenuItem = {
    _id: string;
    navn: string;
    pris: number;
};

export type Butik = {
    _id:string;
    bruger: string;
    butikNavn: string;
    By: string;
    land: string;
    leveringsPris: number;
    ForventetLeveringsTid: number;
    menu: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    sidsteOpdateret: string;
}