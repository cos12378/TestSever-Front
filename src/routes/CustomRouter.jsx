import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Template from "../components/Template";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Auth from "../components/Auth";
import MySignup from "../components/MySignup";

const CustomRouter = ()=>{
    const myRoutes = [
        {
            path:"/login", component:<Login/>
        },{
            path:"/register", component:<Signup />
        },{
        path:"/my/register", component:<MySignup/>
    },{
        path:"/auth", component:<Auth/>
    }
    ]
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<h1><Link to={"/login"}>go to login</Link></h1>}></Route>
            <Route element={<Template />}>
                {myRoutes.map(el=>
                    <Route key={el.path} path={el.path} element={el.component}></Route>
                )}
            </Route>
        </Routes>
    </BrowserRouter>
}
export default CustomRouter