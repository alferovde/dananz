export interface   IWindowSize{
    innerWidth?:number | undefined ,
    innerHeight?:number,
    position?: 'row' |'colomn'
}

export interface IList{
    id:number,
    title:string,
    description?:string
    hidden:boolean
}

export interface IPageTitle{
    title:string,
    description:string,
    img?:string
}

export interface IServiceList{
    id:number,
    title:string,
    description:string,
}