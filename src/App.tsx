import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import Side from './components/sideNavBar/SideNav';
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
