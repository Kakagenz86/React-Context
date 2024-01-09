import { useContext } from "react";
import { ThemeContext } from "../../context/themeprovider";
import Toggle from "../../components/toggle/toggle";
import Navbar from "../../components/Navbar/navbar";

const HomePages = () => {
    const {isLightTheme} = useContext(ThemeContext);


    return (
        <div>
            <Navbar/>
            <h1 style={{
                backgroundColor: isLightTheme ? 'white' : 'black',
                color: isLightTheme ? 'black' : 'white'
                }}>Home Pages</h1>
            <Toggle/>
        </div>
    );
}

export default HomePages;