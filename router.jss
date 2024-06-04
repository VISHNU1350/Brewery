import { useState } from "react";
import "./App.css";
import Template from "./Pages/Template";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import "./CSS/Template.css";
import Login from "./Pages/LoginPage/Login";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Detail from "./Pages/Detail";

function App() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    let select = useSelector((state) => state?.login?.tasks);
    // console.log(select);
    return (
        <>
             <Routes>
            {/* {userRole==='HR Manager'?<Route path= '/' element= {<Dashboard /> }/> : <Route path= '/' element= {<SelfAssessment /> }/>}
            <Route path= '*' element= {<AccessError/> }/> */}
            {/* <Route path= '/api-error' element={<APIError/>}/> */}
            <Route path= '/search' element= {<Search/> }/>
            <Route path= '/det' element= {<Detail/> }/>
            <Route path= '/' element= {<Login/> }/>
            {/* <Route exact path="/feed-forward" component={() => "Feed Forward"} />
            <Route exact path="/help-centre" component={() => "Help Centre"} />
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))} */}
        </Routes>
        </>
    );
}

export default App;
