import './App.css';
import FirstSection from './components/Firstsection/FirstSection';
import Footer from './components/Footer/Footer';
import Head from './components/Head/Head';

const App = () => {
    return (
        <div className="App">
            <Head />
            <FirstSection />
            <Footer />
        </div>
    );
};

export default App;
