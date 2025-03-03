export interface NavigationMenu extends Array<NavigationMenuElement>{
  [index:number] : NavigationMenuElement


// href: NavigationMenuElement[]
}

export interface NavigationMenuElement{
    id:number,
    text:string,
    link:string
}