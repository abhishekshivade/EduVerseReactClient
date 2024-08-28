import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
import { BASE_ROUTE} from '../../constants/AppRoutes'
import {useAuth} from '../../services/AuthContext'

export const PrivateRoute = ({role}) => {
    const {user}=useAuth();
        if(user){
        return <Outlet/>
    }else{
        return <Navigate to={BASE_ROUTE}/>
    }
}