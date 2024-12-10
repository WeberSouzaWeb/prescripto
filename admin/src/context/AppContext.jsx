import React, { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currency = '$'
    const calculateAge = (dob) => {
        const today = new Date()
        const birtDate = new Date(dob)
        let age = today.getFullYear() - birtDate.getFullYear()
        return age
    }

    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const slotDateFormat = (slotDate) => {
      const dateArray = slotDate.split('_')
      console.log(dateArray)
      return dateArray[0] + " " + months[Number(dateArray[2])] + " " + dateArray[4] //
    }

    const value = {
        calculateAge,
        slotDateFormat,
        currency
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider