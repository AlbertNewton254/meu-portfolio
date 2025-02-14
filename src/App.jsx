import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Goals from "./components/Goals";
import Plans from "./components/Plans";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./app.css";
import ProfileImage from "./components/ProfilePicture";

function App() {
    return (
        <>
            <Header />
            <main>
                <ProfilePicture />
                <About />
                <Goals />
                <Plans />
                <Alert />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;