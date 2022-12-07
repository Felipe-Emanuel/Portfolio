import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from '../templates/Login/Login'
import { CreateAccount } from '../templates/Login/CreateAccount'
import { PageNotFound } from '../templates/PageNotFound/PageNotFound'
import { Page } from "../page";
import { Architecture } from "../templates/SPA/Architecture";

export function AllRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/createaccount" element={<CreateAccount />}/>
                <Route path="/Architecture" element={<Architecture />}/>
                <Route path="/*" element={<PageNotFound />}/>
            </Routes>
        </Router>
    )
}