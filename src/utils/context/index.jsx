import React, { useState, createContext } from 'react'
import { useContext } from 'react'

export const MyListContext = createContext()

export function useMyListContext() {
    const context = useContext(MyListContext)

    if (!context) {
        throw new Error('MyListContext must be used inside MyListProvider')
    }
}

export function MyListProvider({ children }) {
    const [myList, setMyList] = useState([{
        backdrop_path
        : 
        "/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg",
        homepage
        : 
        "https://www.disneyplus.com/movies/pinocchio/5fzcpc295rQn",
        id
        : 
        532639,
        imdb_id
        : 
        "tt4593060",
        original_language
        : 
        "en",
        original_title
        : 
        "Pinocchio",
        overview
        : 
        "A wooden puppet embarks on a thrilling adventure to become a real boy.",
        popularity
        : 
        3239.378,
        poster_path
        : 
        "/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
        release_date
        : 
        "2022-09-07",
        tagline
        : 
        "The timeless classic.",
        title
        : 
        "Pinocchio"}]);
    const contextValue = {
        myList, setMyList
    };
    return (
        <MyListContext.Provider value={contextValue}>{children}</MyListContext.Provider>
    )
}

