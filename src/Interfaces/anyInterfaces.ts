import { ReactElement } from "react"

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

export interface IServiceAchevementList{
    id:number,
    title:string,
    description:string,
    img?:string
}

export interface IUsersList{
    id:number, 
    name:string,
    sur_name:string,
    profession:string,
    avatar:string
}

export interface IInputComponent{
    labelName:string,
    required?:boolean,
    placeholder:string
    type:'tel'|'text'|'number'|'email',
    select?:any

}

export interface ITextArea{
    labelName:string,
    required?:boolean,
    placeholder:string,
    height?:string
   

}

export interface IPhoneType{
    id:number,
    type:string
}

export interface IPortfolioItem{
    id:number,
    title:string,
    overview:string,
    logo:string,
    name:string,
    sur_name:string,
    profession:string,
    avatar:string,
    key?:number,
    innerWidth?:number

}

export interface IPagination{
    current_page:number,
    first_page_url:string
    from:number
    next_page_url:string
    path:string
    per_page:number
    prev_page_url:string|null
    to:number,
    total:number,
    last_page:number,
    setNewPage:Function
    


}

export interface IPortfolioSingle{
    id:number,
    title:string,
    sub_title:string,
    logo:string,
    overview:string,
    process:string,
    date:string,
    img1:string,
    img2:string,
    img3:string,
    img4:string,
    img5:string,
    user_id:number

}