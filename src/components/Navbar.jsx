import { Link } from "react-router-dom"

export function Navbar(){
    return (
        <>
            <nav className="bg-black text-amber-50 h-15 flex justify-center items-center">
                {/* <div className="h-15 flex justify-center items-center">
                    <Link to="/">Home</Link>
                    <Link to="/product">Product</Link>
                </div> */}
                <div className="h-15 flex justify-center items-center gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About Us</Link>
                    <Link to="/product">Product</Link>
                </div>
                {/* <div className="h-15 flex justify-center items-center">
                    <Link to="/">Home</Link>
                    <Link to="/product">Product</Link>
                </div> */}
                
            </nav>
        </>
    )
}