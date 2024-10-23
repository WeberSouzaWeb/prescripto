import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext(null)

const AppContextProvider = (props) => {

    const contextValue = {
        doctors
    }

    return (
        <AppContext.Provider value={ contextValue }>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider