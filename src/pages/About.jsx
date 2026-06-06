export function About() {
    const timeline = [
        {
            year: '2020',
            title: 'The Beginning',
            desc: 'Eden Cafe เริ่มต้นจากครัวเล็กๆ และความฝันของผู้ก่อตั้งที่อยากสร้างพื้นที่อบอุ่น เสิร์ฟกาแฟที่ชงด้วยใจและขนมที่อบสดทุกเช้า',
            side: 'left',
        },
        {
            year: '2021',
            title: 'First Home',
            desc: 'เปิดสาขาแรกในอาคารเก่าอายุกว่า 50 ปี ตกแต่งด้วยเฟอร์นิเจอร์ไม้วินเทจ ภาพวาดคลาสสิก และแสงเทียนที่ให้ความรู้สึกเหมือนบ้าน',
            side: 'right',
        },
        {
            year: '2022',
            title: 'Growing Roots',
            desc: 'เพิ่มเมนู Signature และเริ่มรับออเดอร์เค้กและเบเกอรี่ล่วงหน้า ชุมชนเล็กๆ รอบร้านเริ่มเติบโตขึ้น Eden กลายเป็นมากกว่าร้านกาแฟ',
            side: 'left',
        },
        {
            year: '2024',
            title: 'Eden Today',
            desc: 'วันนี้ Eden Cafe ยังคงยึดมั่นในความตั้งใจเดิม — ทุกแก้ว ทุกจาน และทุกมุมของร้านถูกสร้างมาเพื่อให้คุณรู้สึกว่าที่นี่คือบ้านของคุณ',
            side: 'right',
        },
    ]

    return (
        <div className="min-h-screen bg-[#F5F0E8]">

            {/* Hero */}
            <div className="w-full py-32 flex flex-col items-center justify-center gap-4 border-b border-stone-200">
                <p className="text-stone-400 text-xs tracking-widest uppercase">
                    Who We Are
                </p>
                <h1
                    className="text-5xl md:text-7xl font-light tracking-widest uppercase"
                    style={{ color: '#c9a84c', WebkitTextStroke: '1px #000' }}
                >
                    Our Story
                </h1>
                <div className="w-12 h-px bg-stone-300 mt-2" />
                <p className="text-stone-500 text-sm tracking-wider mt-4 max-w-md text-center leading-loose">
                    จากครัวเล็กๆ สู่พื้นที่พักใจของทุกคน — นี่คือเรื่องราวของ Eden
                </p>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto px-8 py-24">
                <div className="relative">

                    {/* เส้นกลาง */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-stone-200" />

                    <div className="flex flex-col gap-20">
                        {timeline.map((item) => (
                            <div
                                key={item.year}
                                className={`relative flex items-center gap-8 ${
                                    item.side === 'right' ? 'flex-row-reverse' : 'flex-row'
                                }`}
                            >
                                {/* Content */}
                                <div className={`w-5/12 flex flex-col gap-3 ${
                                    item.side === 'right' ? 'items-start' : 'items-end text-right'
                                }`}>
                                    <span
                                        className="text-3xl font-light tracking-widest"
                                        style={{ color: '#c9a84c' }}
                                    >
                                        {item.year}
                                    </span>
                                    <h3 className="text-stone-800 text-sm tracking-widest uppercase font-light">
                                        {item.title}
                                    </h3>
                                    <p className="text-stone-400 text-xs tracking-wide leading-loose">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Dot กลาง */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#F5F0E8] border border-stone-400" />

                                {/* Spacer */}
                                <div className="w-5/12" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Bottom quote */}
            <div className="w-full py-24 flex flex-col items-center gap-4 border-t border-stone-200 px-8">
                <p className="text-stone-300 text-xs tracking-widest uppercase">
                    Our Belief
                </p>
                <blockquote
                    className="text-2xl md:text-3xl font-light tracking-widest text-center max-w-xl leading-loose"
                    style={{ color: '#8B6914' }}
                >
                    "Every cup tells a story."
                </blockquote>
                <p className="text-stone-400 text-xs tracking-widest uppercase mt-2">
                    — Eden Cafe, Est. 2020
                </p>
            </div>

        </div>
    )
}