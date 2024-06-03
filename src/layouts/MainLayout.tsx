import { Link, NavLink, Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <main>
            <div className="nav-holder">
                <div className="logo">
                    <Link to={'/'}>MyWebsite</Link>
                </div>
                <nav>
                    <NavLink to={'/'}>Homepage</NavLink>
                    <NavLink to={'/mycart'}>My cart</NavLink>
                </nav>
            </div>
            <Outlet />
            <footer>
                Copyright text goes here &copy; {(new Date()).getFullYear()}
            </footer>
        </main>
    )
};

export default MainLayout;