import { JWT_TOKEN_STORAGE_KEY,USER_TYPE_STORAGE_KEY,USER_ID_STORAGE_KEY } from "../constants/authConstants"

export const storeJwtToken=token=>sessionStorage.setItem(JWT_TOKEN_STORAGE_KEY,token)

export const removeJwtToken=()=>sessionStorage.removeItem(JWT_TOKEN_STORAGE_KEY)

export const getJwtToken=()=>sessionStorage.getItem(JWT_TOKEN_STORAGE_KEY)

export const storeUserType=userType=>sessionStorage.setItem(USER_TYPE_STORAGE_KEY,userType)

export const removeUserType=()=>sessionStorage.removeItem(USER_TYPE_STORAGE_KEY)

export const getUserType=()=>sessionStorage.getItem(USER_TYPE_STORAGE_KEY)

export const storeUserId=userId=>sessionStorage.setItem(USER_ID_STORAGE_KEY,userId)

export const removeUserId=()=>sessionStorage.removeItem(USER_ID_STORAGE_KEY)

export const getUserId=()=>sessionStorage.getItem(USER_ID_STORAGE_KEY)