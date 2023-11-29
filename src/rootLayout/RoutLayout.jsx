import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopNavBar from '../component/TopNavBar'
import CustomMain from '../customStyle/CustomComponent'
import LeftDrawer from '../component/LeftDrawer'
const RoutLayout = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
    setOpen(!open);
    }

    const location = useLocation()
    const hideMenu =() =>{
        const { pathname } = location
        return !pathname.includes("/checkout")
    }
    const drawerWidth = 240
    return ( 
        <>
        <TopNavBar toggleDrawer={toggleDrawer} open={open}/>
        <CustomMain open={open}>
            { hideMenu() && 
                <LeftDrawer drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} open={open}/>
            }
            <Outlet/>
        </CustomMain>
        </>
     );
}
 
export default RoutLayout;