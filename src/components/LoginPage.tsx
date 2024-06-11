import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store"

export const LoginPage =() => {
    const authState = useAuthStore(state =>state.status);
//    const authStateToquen = useAuthStore(state =>state.token);
    const usuarioJS = useAuthStore(state =>state.usuario);

    const Login = useAuthStore(state =>state.login);
    const Logout = useAuthStore(state =>state.logout);

    useEffect(()=>{
        setTimeout(()=>{
            Logout();
        }, 1500);
    },[])
    if (authState=='Chequeado'){
        return<h3>Loading...</h3>
    }
    /*else   
        return<h3>No cheaqueado</h3>
*/


    return (

        
        <>
            <h3>Login Page</h3>
            {/*authState}<br></br>
            {authStateToquen*/}
            {
                (authState=='Autenticado')
                ?<div> Autenticado como; {JSON.stringify(usuarioJS, null, 2)}</div>
                :<div> No Autenticado</div>
            }


            {

                (authState=='Autenticado')
                ? (<button onClick={Logout}> Logout </button>)
                :(<button onClick={()=>Login('mvega@prismati.cl', '123')}> Login </button>)
            }
        
        </>


    )
}