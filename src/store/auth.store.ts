import {create } from 'zustand';
interface AuthState {
    status: 'Autenticado' | 'No Autenticado' | 'Chequeado';
    token?: string;
    usuario?:{
        nombre: string;
        email:string;
    }
    login: (email: string, contrasenia: string)=>void;
    logout: ()=>void;
}

export const useAuthStore =create<AuthState>()((set) =>({
    status : 'Chequeado',
    token: undefined,
    user: undefined,

    login: (email: string, contrasenia: string)=>{
        set ({
            status:'Autenticado',
            token: 'ABC123',
            usuario: {
                nombre: 'Marco Vega',
                email: email,
            }
        });
    },

    logout: ()=>{
        set({
            status: 'No Autenticado',
            token:undefined, 
            usuario: undefined

        })
    },

})

) 