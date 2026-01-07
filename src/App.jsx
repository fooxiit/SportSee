import MainContent from './composants/MainContent';
import Header from './composants/Header';
import Side from './composants/SideNav';
import './css/app.css';

function App() {
    return (
        <div className="app grid grid--8r grid--8c">
            <Header />
            <Side />
            <MainContent>
                <h1>Sport see</h1>
            </MainContent>
        </div>
    );
}

export default App;
