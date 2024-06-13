import axios from "axios"
import { useEffect, useState } from "react"
import {  User, type ReqResUserListResponse} from "../interfaces"


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
    const [users, setUsers] = useState<User[]> ([]);
    
    useEffect(()=>{
        //cargarUsuarios().then(usuarios=>console.log(usuarios))
        cargarUsuarios().then(users=>setUsers(users))
        
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
            {
            users.map (user => (
            <tr key ={ user.id}>
                <td><img style={{width:'50px'}}src={user.avatar} alt = "User Avatar"></img></td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
            </tr>
            ))
            }
        </tbody>
    </table>
    </>
}