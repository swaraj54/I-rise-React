
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const router = useNavigate();
    return (
        <div style={{ display: 'flex', justifyContent: "space-around", border:"5px solid red" }}>
            <div onClick={() => router('/mens')}>Men</div>
            <div onClick={() => router('/women')} >Women</div>
            <div onClick={() => router('/kids')} >Kids</div>
        </div>
    )
}

export default Navbar;