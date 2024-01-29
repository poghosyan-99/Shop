import { Outlet } from "react-router";
import Menu from "../../Components/Menu";

const Layout = ({ cart}) => {

    return(
        <div className="Layout">
            <Menu cart={cart} />
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default Layout;