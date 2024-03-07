import React, { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types"; // Importa PropTypes

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const[theme, setTheme] = useState("Light")

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme=== "Light" ? "dark" : "Light"));
    };

    const ThemeContextValues = {
        theme,
        toggleTheme,
    };
    return (
        <ThemeContext.Provider value={ThemeContextValues}>
            {children}
        </ThemeContext.Provider>
    );

};

// Agrega la validación de PropTypes para la prop "children"
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};