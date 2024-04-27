import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between py-2 px-5 border-b-2 border-slate-500">
            <div>Header</div>
            <div className="flex gap-5">
                <div><Link to="">Signup</Link></div>
                <div><Link to="/profile">Profile</Link></div>
            </div>
        </div>
    )
}
export default Header;