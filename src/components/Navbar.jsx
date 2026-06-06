// import { Link } from "react-router-dom"

// export function Navbar(){
//     return (
//         <>
//             <nav className="bg-black text-amber-50 h-15 flex justify-center items-center">
//                 {/* <div className="h-15 flex justify-center items-center">
//                     <Link to="/">Home</Link>
//                     <Link to="/product">Product</Link>
//                 </div> */}
//                 <div className="h-15 flex justify-center items-center gap-4">
//                     <Link to="/">Home</Link>
//                     <Link to="/aboutus">About Us</Link>
//                     <Link to="/product">Product</Link>
//                 </div>
//                 {/* <div className="h-15 flex justify-center items-center">
//                     <Link to="/">Home</Link>
//                     <Link to="/product">Product</Link>
//                 </div> */}
                
//             </nav>
//         </>
//     )
// }

import { Link, useLocation } from "react-router-dom"

export function Navbar() {
    const { pathname } = useLocation()

    return (
        <nav className="bg-stone-900 border-b border-stone-800 h-16 flex justify-center items-center">
            <div className="flex items-center gap-12">
                <NavLink to="/"        label="Home"     active={pathname === "/"} />
                <NavLink to="/about" label="About Us" active={pathname === "/about"} />
                <NavLink to="/product" label="Product"  active={pathname === "/product"} />
            </div>
        </nav>
    )
}

function NavLink({ to, label, active }) {
    return (
        <Link
            to={to}
            className={`
                text-xs tracking-widest uppercase transition-colors duration-300
                ${active
                    ? "text-white"
                    : "text-stone-500 hover:text-white"
                }
            `}
        >
            {label}
        </Link>
    )
}