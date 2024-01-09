import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{display: 'flex' , gap: '30px'}}>
            <Link to={'/'}>
                <p>Home</p>
            </Link>
            <Link to={'/menus'}>
                <p>Menus</p>
            </Link>
        </div>
    );
}

export default Navbar;