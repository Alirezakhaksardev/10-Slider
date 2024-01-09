import React , {useContext, useState} from 'react';

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({children}) => {

    const [isOpenSidebar , setIsOpenSidebar] = useState(false); 
    const openSidebar = () => setIsOpenSidebar(true)
    const closeSidebar = () => setIsOpenSidebar(false)

    return <AppContext.Provider value={{isOpenSidebar,openSidebar,closeSidebar}}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext , AppProvider}