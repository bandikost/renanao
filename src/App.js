import {React} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Роутинг
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
// Личный кабинет
import Login from "./components/User/login_component";
import SignUp from "./components/User/signup_component";
import UserDetails from "./components/User/userDetails";
// Фиксированные элементы
import Header from "./main/Header";
import FixedIcons from "./main/FixedIcons";
// Оплата
import PaymentForm from "./Pages/Payments";
import SuccessPage from './Pages/SuccessPage';
// Все страницы
import GeneralPage from "./Pages/Main";
import AboutStory from "./Pages/About";
import VideoBook from "./Pages/VideoBook";
import AudioBook from "./Pages/AudioBook";
import SpaceWords from "./Pages/SpaceWords";
import PlanetsPage from "./Pages/Planets";



const App = (props) => {
return (
  <BrowserRouter >
  <FixedIcons />
    <Header /> 
        <Routes>
            <Route path="/general"       element={<GeneralPage />} />
            <Route path="/sign-in"       element={<Login />} />
            <Route path="/sign-up"       element={<SignUp />} />
            <Route path="/userDetails"   element={<UserDetails />} />
            <Route path="/about"         element={<AboutStory />} />
            <Route path="/videobook"     element={<VideoBook  />} />
            <Route path="/audiobook"     element={<AudioBook  />} />
            <Route path="/spaceWords"       element={<SpaceWords />} />   
            <Route path="/planets"       element={<PlanetsPage />} />        
            <Route path="/payments"      element={<PaymentForm />} />
            <Route path="/success"       element={<SuccessPage />} />
            <Route path="/videobook/OpenResourse"     element={<VideoBook  />} />
            <Route path="/audiobook/OpenResourse"     element={<AudioBook  />} />
        </Routes> 
             
</BrowserRouter >
  );
}


export default App;

