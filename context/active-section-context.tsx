"use client";

import React, {useState, ReactNode, createContext, useContext} from 'react'
import type {SectionName} from "@/lib/types";


type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
    
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider(
    {children}:{children: ReactNode}
){
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);


    return (
        <ActiveSectionContext.Provider
        value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
        }}
        >
            {children}
        </ActiveSectionContext.Provider>
        
    )
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error(
            "Active Section Context Error."
        )
    }

    return context;
}
