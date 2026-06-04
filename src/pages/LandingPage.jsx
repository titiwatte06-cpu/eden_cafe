import cafe from "../assets/cafe.png"
 
export function LandingPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-dvh flex flex-col md:flex-row">
 
                {/* Left: Text */}
                <div className="bg-white w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center px-10 gap-4">
                    <h1 className="text-5xl md:text-7xl font-light tracking-widest text-stone-800 uppercase">
                        Eden Cafe
                    </h1>
                    <p className="text-stone-400 tracking-widest text-sm uppercase">
                        Est. 2024
                    </p>
                    <a
                        href="#menu"
                        className="mt-4 px-8 py-3 border border-stone-800 text-stone-800 text-sm tracking-widest uppercase hover:bg-stone-800 hover:text-white transition-colors duration-300"
                    >
                        View Menu
                    </a>
                </div>
 
                {/* Right: Image */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
                    <img
                        src={cafe}
                        alt="Eden Cafe interior"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
 
            {/* Section 2 */}
            <div className="bg-[#2D3635] w-full h-dvh flex items-center justify-center">
                <p className="text-white/30 text-sm tracking-widest uppercase">Section 2</p>
            </div>
 
            {/* Section 3 */}
            <div className="bg-[#1E3932] w-full h-dvh flex items-center justify-center">
                <p className="text-white/30 text-sm tracking-widest uppercase">Section 3</p>
            </div>
        </>
    )
}