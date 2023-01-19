import NavigationBar from '../navigation/NavigationBar'
import Main from './header/Main';
import MainContent from './main/MainContent';
import Footer from './footer/Footer'

function Home() {
    return (
        <>
            <NavigationBar />
            <Main />
            <MainContent />
            <Footer />
        </>
    )
}

export default Home;