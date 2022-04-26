export const Get_Data = "Get_data"

export const Token = "Get_Token"

export const IS_AUTH = "Is_Auth"

export const LOG_OUT = "LOG_OUT"

export const is_auth = (payload) =>({type:IS_AUTH,payload})

export const get_data = (payload) =>({type:Get_Data,payload})

export const token = (payload) =>({type:Token,payload})

export const log_out = (payload) =>({type:LOG_OUT,payload})