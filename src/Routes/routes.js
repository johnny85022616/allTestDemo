import {IncreaseForm} from '../module/nameList/IncreaseNameList.jsx'
import {DeleteForm} from '../module/nameList/DeleteNameList.jsx'
import {UpdateForm} from '../module/nameList/UpdateNameList.jsx'
import {Home} from '../module/homePage/home.js'
import {Login} from '../module/Login/login.jsx'

export const routes = [
    {
        exact : true , 
        path : "/" ,
        component: Login
    } , 
    {
        exact : true , 
        path : "/Home" ,
        component: Home
    },
    {
        exact : true , 
        path : "/Increase" ,
        component: IncreaseForm
    },
    {
        exact : true , 
        path : "/Delete" ,
        component: DeleteForm
    },
    {
        exact : true , 
        path : "/Update" ,
        component: UpdateForm
    },
]