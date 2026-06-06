import cafe from "../assets/cafe.png"
 
export function LandingPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-dvh flex flex-col md:flex-row">
 
                {/* Left: Text */}
                <div className="bg-white w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center px-10 gap-4">
                    <h1 className="text-5xl md:text-7xl font-light tracking-widest uppercase text-[#c9ad63] [--webkit-text-stroke:1px_#000000] [-webkit-text-stroke:1px_#000000]">
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
 

            {/* Section 2 — Our Story */}
            <div className="bg-[#2D3635] w-full h-dvh flex flex-col md:flex-row">

                {/* Left: รูปร้าน */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
                    <img
                        src={cafe}
                        alt="Eden Cafe storefront"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Right: ประวัติร้าน */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-start justify-center px-12 md:px-16 gap-6">
                    <p className="text-white/30 text-xs tracking-widest uppercase">
                        Our Story
                    </p>
                    <h2
                        className="text-3xl md:text-5xl font-light tracking-widest uppercase"
                        style={{ color: '#c9a84c', WebkitTextStroke: '1px #000' }}
                    >
                        Since 2024
                    </h2>
                    <div className="w-8 h-px bg-white/20" />
                    <p className="text-white/50 text-sm tracking-wider leading-loose">
                        Eden Cafe เกิดจากความฝันเล็กๆ ของคนรักกาแฟที่อยากสร้างพื้นที่พักใจ
                        ท่ามกลางความวุ่นวายของเมือง เราเชื่อว่าทุกแก้วควรเล่าเรื่องราว
                        และทุกมุมของร้านควรให้ความรู้สึกเหมือนบ้าน
                    </p>
                    <p className="text-white/30 text-sm tracking-wider leading-loose">
                        เมล็ดกาแฟทุกเมล็ดถูกคัดเลือกมาจากไร่ที่เราเชื่อมั่น
                        บาริสต้าทุกคนผ่านการฝึกฝนมาเพื่อถ่ายทอดความตั้งใจนั้น
                        ลงสู่ทุกแก้วที่คุณได้รับ
                    </p>
                    <div className="grid grid-cols-3 gap-8 mt-4">
                        {[
                            { num: '01', label: 'สาขา' },
                            { num: '12+', label: 'เมนู' },
                            { num: '∞', label: 'ความตั้งใจ' },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col gap-2">
                                <span
                                    className="text-2xl font-light tracking-widest"
                                    style={{ color: '#c9a84c' }}
                                >
                                    {item.num}
                                </span>
                                <span className="text-white/30 text-xs tracking-widest uppercase">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
 
            {/* Section 3 — Signature Menu */}
            <div className="bg-[#1C1714] w-full h-dvh flex flex-col md:flex-row items-center justify-center gap-16 px-8 md:px-24">

                {/* Left: รูปลอย + เงา */}
                <div className="w-full md:w-2/5 flex items-center justify-center">
                    <div className="relative">
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 rounded-full blur-xl" />
                        <img
                            src={cafe}
                            alt="Signature drink"
                            className="relative w-64 md:w-80 aspect-square object-cover rounded-sm"
                            style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
                        />
                    </div>
                </div>

                {/* Right: รายละเอียดเมนู */}
                <div className="w-full md:w-3/5 flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-[#F4E2C3]/30 text-xs tracking-widest uppercase">
                            Signature
                        </p>
                        <h2
                            className="text-3xl md:text-5xl font-light tracking-widest uppercase"
                            style={{ color: '#c9a84c', WebkitTextStroke: '1px #000' }}
                        >
                            Our Menu
                        </h2>
                        <div className="w-8 h-px bg-[#F4E2C3]/20" />
                    </div>

                    <div className="flex flex-col gap-6">
                        {[
                            {
                                name: 'Eden Signature',
                                type: 'Coffee',
                                desc: 'Espresso, oat milk, caramel, sea salt — แก้วที่บอกว่าคุณมาถึงแล้ว',
                                price: '฿120',
                            },
                            {
                                name: 'Forest Matcha',
                                type: 'Matcha',
                                desc: 'Ceremonial grade matcha, coconut milk, honey — เย็น สงบ เหมือนป่าลึก',
                                price: '฿110',
                            },
                            {
                                name: 'Dark Bloom',
                                type: 'Cold Brew',
                                desc: 'Cold brew 20 ชั่วโมง, dark chocolate, orange peel — ลึก ซับซ้อน ไม่ลืม',
                                price: '฿130',
                            },
                        ].map((item, i) => (
                            <div key={item.name} className="flex gap-6 items-start group cursor-pointer">
                                <span className="text-[#F4E2C3]/20 text-xs tracking-widest mt-1 group-hover:text-[#c9a84c] transition-colors duration-300">
                                    0{i + 1}
                                </span>
                                <div className="flex flex-col gap-1 border-b border-[#F4E2C3]/10 pb-6 flex-1 group-hover:border-[#F4E2C3]/30 transition-colors duration-300">
                                    <div className="flex items-baseline justify-between">
                                        <h3 className="text-[#F4E2C3] text-sm tracking-widest uppercase font-light">
                                            {item.name}
                                        </h3>
                                        <span className="text-[#F4E2C3]/40 text-xs tracking-widest">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-[#F4E2C3]/40 text-xs tracking-wide leading-loose">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

