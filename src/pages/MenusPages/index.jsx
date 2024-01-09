import { useContext } from "react";
import { ThemeContext } from "../../context/themeprovider";
import { AppContext } from "../../context/menuprovider";
import Toggle from "../../components/toggle/toggle";
import Navbar from "../../components/Navbar/navbar";
// import { useEffect } from "react";

const MenuPages = () => {
    const {isLightTheme} = useContext(ThemeContext);
    const {menu} = useContext(AppContext);

    // useEffect(() => {
    //     menu()
    // }, [])
    
    return (
        <div>
            <Navbar/>
            <h1 style={{
                backgroundColor: isLightTheme ? 'white' : 'crimson', 
                color: isLightTheme ? 'blue' : 'white'
                }}>Menu Pages</h1>
            <Toggle/>
            {menu.map((menus, index) => (
                <div key={index}>
                    <p>{menus.name}</p>
                    <img style={{ width: "200px" }} src={menus.imageUrl} alt={menus.name} />
                    <p>{menus.description}</p>
                </div>
            ))}
        </div>
    );
}

export default MenuPages;