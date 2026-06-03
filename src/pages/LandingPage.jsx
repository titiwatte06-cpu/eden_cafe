import cafe from "../assets/cafe.png"

export function LandingPage() {
    return (
        <>
            <div className="bg-gray-600 w-full h-dvh flex">
                <div className="bg-white w-1/2 h-dvh">
                    <p>EDEN CAFE</p>
                </div>
                <div className="w-1/2 h-dvh">
                    <img src={cafe} className="w-full h-full object-cover"/>
                </div>
                
            </div>
            <div className="bg-[#2D3635] w-full h-dvh flex">
                
                
            </div>
            <div className="bg-[#1E3932] w-full h-dvh flex">
                
                
            </div>
            
        </>
        
        
    )
}