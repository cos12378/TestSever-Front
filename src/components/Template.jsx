import logo from "../logo.svg";
import CustomRouter from "../routes/CustomRouter";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

const Template = ()=>{
    return <div className="App">
        <div className={"App-header"}>
            <header style={{width:'100%'}}>
                <div style={{width:'100%',display:"flex", justifyContent: "space-around"}}>
                    <Link to={"/login"}>login</Link>
                    <Link to={"/register"}>signup</Link>
                </div>
            </header>

            <section>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Outlet/>
                </div>
            </section>
        </div>
    </div>
}
export default Template