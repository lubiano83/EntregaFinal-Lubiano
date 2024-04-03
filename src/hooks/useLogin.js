/* useLogin */

import { useState } from "react";

export const useLogin = () => {
    // Estado para almacenar el correo electrónico y la contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const USUARIO = { mail: "lubiano83@gmail.com", password: "123456789" };

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
        // Aquí puedes agregar la lógica para verificar las credenciales y realizar el inicio de sesión
        if (email === USUARIO.mail && password === USUARIO.password) {
        console.log("Inicio de sesión correcto");
        setIsLoggedIn(true); // Establece el estado de isLoggedIn en true
        } else {
        console.log("Correo electrónico o contraseña incorrectos");
        }
    };
    return {handleLogin, setIsLoggedIn, isLoggedIn, setEmail, setPassword, email, password};
} 