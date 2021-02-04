import { RequestData } from "./RequestData";

export function isRequestData(data:any):boolean{
  const c = data as RequestData;
  if(
    !c.content ||
    !c.url
    ){
    return false;
  }else{
    return true;
  }
}