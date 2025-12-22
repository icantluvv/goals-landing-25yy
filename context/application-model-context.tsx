"use client"

import React, { createContext, useContext } from "react"

type ApplicationModelContextType = {
    openApplicationModel: boolean
    setOpenApplicationModel: (isModelOpened: boolean) => void
}

type ApplicationModelProviderProps = {
    children: React.ReactNode
}

const ApplicationModelContext = createContext<ApplicationModelContextType | undefined>(undefined)

export function ApplicationModelProvider({ children }: ApplicationModelProviderProps) {
    const [openApplicationModel, setOpenApplicationModel] = React.useState(false)

    return (
        <ApplicationModelContext.Provider value={{ openApplicationModel, setOpenApplicationModel }}>
            {children}
        </ApplicationModelContext.Provider>
    )
}

export const useApplicationModel = (): ApplicationModelContextType => {
    const context = useContext(ApplicationModelContext)
    if (!context) {
        throw new Error("useSlider must be used within a SliderProvider")
    }
    return context
}
