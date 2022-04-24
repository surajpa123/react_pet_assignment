import { Get_Data } from "./action";

const initState = {
    data:[]
}


export const reducer = (store = initState,{type,payload})=>{
    console.log("Store Data",store)
    switch(type){
        case Get_Data:
            return({...store,data:payload})
            default:
                return store;
    }
}