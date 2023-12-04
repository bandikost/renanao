import React, {useState, useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Роутинг
import {  Routes, Route, BrowserRouter } from "react-router-dom";
// Личный кабинет
import Login from "./components/User/login_component";
import UserDetails from "./components/User/userDetails";


// Оплата

// Все страницы
import GeneralPage from "./Pages/Main";
import AboutStory from "./Pages/About";
import VideoBook from "./Pages/VideoBook";
import AudioBook from "./Pages/AudioBook";
import SpaceWords from "./Pages/SpaceWords";
import PlanetsPage from "./Pages/Planets";
import Manager from "./manager/manager";
import Register from "./components/User/signup_component";
import MainCardsEdit from "./manager/Main cards/Main-cards-edit";
import FooterEdit from "./manager/Footer/Footer-edit";
import MainVideoEdit from "./manager/Main video/Main-video-edit";
import VideobookEdit from "./manager/Videobook/Videobook-edit";
import AudiobookEdit from "./manager/Audiobook/AudioBook-edit";
import { useNavigate } from "react-router-dom";
import MainVideoEditEn from "./manager/Main video/Main-video-edit-En";
import ManagerEn from "./manager/manager-en";
import ManagerEs from "./manager/manager-es";
import MainVideoEditEs from "./manager/Main video/Main-video-edit-Es";
import FooterEditEn from "./manager/Footer/Footer-edit-en";
import FooterEditEs from "./manager/Footer/Footer-edit-es";
import MaincardsEditEs from "./manager/Main cards/Main-cards-edit-es";
import MaincardsEditEn from "./manager/Main cards/Main-cards-edit-en";
import VideobookEditEn from "./manager/Videobook/Videobook-edit-en";
import VideobookEditEs from "./manager/Videobook/Videobook-edit-es";
import AudiobookEditEn from "./manager/Audiobook/AudioBook-edit-en";
import AudiobookEditEs from "./manager/Audiobook/AudioBook-edit-es";


const Home = () => {
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(true);

  useEffect(() => {
    if (isPaid && window.location.pathname === "/") { 
      navigate("/general"); 
    }
  }, [isPaid, navigate]);

}



const App = (props) => {
  
return (
<BrowserRouter>
  
        <Routes>
            <Route path="/general"       element={<GeneralPage />} />
            <Route path="/sign-up"       element={<Register />} />
            <Route path="/sign-in"       element={<Login />} />
            <Route path="/userDetails"   element={<UserDetails />} />
            <Route path="/about"         element={<AboutStory />} />
            <Route path="/videobook"     element={<VideoBook  />} />
            <Route path="/audiobook"     element={<AudioBook  />} />
            <Route path="/spaceWords"       element={<SpaceWords />} />   
            <Route path="/planets"       element={<PlanetsPage />} />        
    
            <Route path="/manager"       element={<Manager />} />
            <Route path="/manager-en"       element={<ManagerEn />} />
            <Route path="/manager-es"       element={<ManagerEs />} />
            <Route path="/main-cards-edit"       element={<MainCardsEdit />} />
            <Route path="/main-cards-edit-en"       element={<MaincardsEditEn />} />
            <Route path="/main-cards-edit-es"       element={<MaincardsEditEs />} />
            <Route path="/main-video-edit"       element={<MainVideoEdit />} />
            <Route path="/main-video-edit-en"       element={<MainVideoEditEn  />} />
            <Route path="/main-video-edit-es"       element={<MainVideoEditEs  />} />
            <Route path="/videobook-edit"       element={<VideobookEdit />} />
            <Route path="/videobook-edit-en"       element={<VideobookEditEn />} />
            <Route path="/videobook-edit-es"       element={<VideobookEditEs />} />
            <Route path="/audiobook-edit"       element={<AudiobookEdit />} />
            <Route path="/audiobook-edit-en"       element={<AudiobookEditEn />} />
            <Route path="/audiobook-edit-es"       element={<AudiobookEditEs />} />
            <Route path="/footer-edit"       element={<FooterEdit />} />
            <Route path="/footer-edit-en"       element={<FooterEditEn />} />
            <Route path="/footer-edit-es"       element={<FooterEditEs />} />
            <Route path="/videobook/OpenResourse"     element={<VideoBook  />} />
            <Route path="/audiobook/OpenResourse"     element={<AudioBook  />} />
        </Routes> 
        <Home />
        </BrowserRouter>        

  );
}


export default App;

