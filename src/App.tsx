import Header from './composants/header/Header';
import MainContent from './composants/mainContent/MainContent';
import Side from './composants/sideNavBar/SideNav';
import './css/app.css';
import Home from './page/home/Home';

function App() {
    return (
        <div className="app grid grid--8r grid--8c">
            <Header />
            <Side />
            <MainContent>
                <Home />
            </MainContent>
        </div>
    );
}

export default App;
