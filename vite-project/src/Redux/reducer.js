import { Get_Data, LOG_OUT } from "./action";
import { Token } from "./action";
import { is_auth } from "./action";

import { log_out } from "./action";

import { IS_AUTH } from "./action";
const initState = {
    data:[],
    Token:[],
    isAuth:false
}


export const reducer = (store = initState,{type,payload})=>{
    console.log("Store Data",store)
    switch(type){
        case Get_Data:
            return({...store,data:payload})
            case Token :
              return({...store,Token:payload, isAuth:true})
              
                  case LOG_OUT:
                      return ({data:[],Token:[], isAuth:false})
            default:
                return store;
    }
}