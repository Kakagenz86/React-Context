import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getMenu();
    }, []);

    const getMenu = async () => {
        try {
        const res = await axios.get("https://api.mudoapi.tech/menus");
        console.log(res.data.data.Data);
        setMenu(res.data.data.Data);
        } catch (err) {
        console.log(err);
        }
    };

    const contextValue = {
        menu,
    };

    return (
        <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );
};