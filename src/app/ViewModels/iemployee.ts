import { SafeUrl } from "@angular/platform-browser";
export interface IEmployee {
    id:number;
    name:string;
    image:string;
    position:string;
    url:SafeUrl;
}
