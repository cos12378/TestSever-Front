import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router";

const MySignup = ()=>{
    const location = useLocation()


    const [user,setUser] = useState({
        email:"", username:"", role:"",age:0
    })
    useEffect(()=>{
        if(location.state.me){
            setUser({...user,...location.state.me})
        }
    },[location])

    const nav = useNavigate()
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        login()
    }
    const login= ()=>{

        fetch("http://localhost:8080/api/v1/myuser",
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            .then(res=>
                res.json()
            )
            .then(body=>
                console.log(body)
            )
            .catch(e=>
                console.log(e)
            )

    }
    const onChangeHandler = (e)=> {
        const {name, value} =e.target
        setUser({...user, [name]: value})
    }


    return <form onSubmit={onSubmitHandler}>
        <input type={"email"} name={"email"} onChange={onChangeHandler}
        value={user.email} disabled
        />
        <input type={"text"} name={"username"} onChange={onChangeHandler}
               value={user.username} disabled/>
        <input type={"number"} name={"age"} onChange={onChangeHandler}
               value={user.age}
        />
        <input type={"submit"} value={"login"} onChange={onChangeHandler}/>
    </form>
}
export default MySignup