import axios from "axios"
import { useEffect } from "react"
import {  ReqResUserListResponse} from "../interfaces"

const cargarUsuarios = async()=>{
    //const axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2')
    //.then( resp=> console.log(resp.data.data[0]));
    
    try {
        const {data} = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users')
        return data.data;  //usuarios

    }
    catch (error){
        console.log(error);
        return[];

    }

}

export const UserPage =()=>{
    useEffect(()=>{
        
    },[])


    return <>
    <h3>Usuarios</h3>
    <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Avatar</td>
                <td>Nombre</td>
                <td>Email</td>
            </tr>
        </tbody>
    </table>
    </>
}