import './App.css'
import Navbar from "./components/navbar/Navbar.tsx";
import RegisterModal from "./components/modals/RegisterModal.tsx";
import ToasterProvider from "./providers/ToasterProvider.tsx";

function App() {
    return (
        <>
            <ToasterProvider/>
            <Navbar/>
            <RegisterModal/>
        </>
    )
}

export default App
