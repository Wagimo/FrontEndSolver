export interface     ItemMenu{
    title: string;
    links:ItemmenuLink[]
}


export interface ItemmenuLink{
    name:string;
    url:string;
    icon:any;
}