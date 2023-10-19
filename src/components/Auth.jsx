import {useNavigate} from "react-router";
import {useEffect} from "react";

const Auth = () =>{
    const nav = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search)
    const auth =queryParameters.get("auth")

    const check = ()=>{

        fetch("http://localhost:8080/api/v1/myuser/me",
            {
                headers:{
                    "Authorization": `Bearer ${auth}`
                }
            })
            .then(res=>
                res.json()
            )
            .then(body=> {
                console.log(body)
                localStorage.setItem("token", auth)
                nav("/home")
            })
            .catch(e=>
                getMe()
            )
    }

    const getMe = ()=> {
        return fetch(`http://localhost:8080/api/v1/auth/me`,
            {headers:{
                    "Authorization": `Bearer ${auth}`
                }}
        )
            .then(res=>
                res.json()
            )
            .then(body=> {
                nav("/my/register",{state: {me:body}})
            })
            .catch(()=>nav("/login"))
    }

    useEffect(()=>{
        check()
    },[])

    return <div>
        <h1>loading...</h1>
    </div>

}

export default Auth