import { Link } from "react-router-dom"

export function Footer() {
    return (
        <footer className="bg-[#222121] w-full">

            <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Col 1 — Brand */}
                <div className="flex flex-col gap-4">
                    <h3
                        className="text-2xl font-light tracking-widest uppercase"
                        style={{ color: '#c9a84c', WebkitTextStroke: '0.5px #000' }}
                    >
                        Eden Cafe
                    </h3>
                    <p className="text-[#F4E2C3]/30 text-xs tracking-widest uppercase">
                        Est. 2020
                    </p>
                    <div className="w-8 h-px bg-[#F4E2C3]/10 mt-2" />
                    <p className="text-[#F4E2C3]/40 text-xs tracking-wide leading-loose mt-2">
                        พื้นที่พักใจของทุกคน ทุกแก้วคือเรื่องราว
                    </p>

                    <div className="flex gap-4 mt-4">
                        {/* Instagram */}
                        <a
                            href="#"
                            className="w-9 h-9 border border-[#F4E2C3]/20 flex items-center justify-center hover:border-[#c9a84c] transition-colors duration-300 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-[#F4E2C3]/40 group-hover:text-[#c9a84c] transition-colors duration-300"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a
                            href="#"
                            className="w-9 h-9 border border-[#F4E2C3]/20 flex items-center justify-center hover:border-[#c9a84c] transition-colors duration-300 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-[#F4E2C3]/40 group-hover:text-[#c9a84c] transition-colors duration-300"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Col 2 — Hours */}
                <div className="flex flex-col gap-4">
                    <p className="text-[#F4E2C3]/30 text-xs tracking-widest uppercase">
                        Opening Hours
                    </p>
                    <div className="w-8 h-px bg-[#F4E2C3]/10" />
                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-[#F4E2C3]/60 text-xs tracking-widest uppercase">
                                อังคาร — พฤหัสบดี
                            </p>
                            <p className="text-[#F4E2C3]/30 text-xs tracking-wider">
                                09:00 — 17:00 น.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#F4E2C3]/60 text-xs tracking-widest uppercase">
                                ศุกร์ — อาทิตย์
                            </p>
                            <p className="text-[#F4E2C3]/30 text-xs tracking-wider">
                                09:00 — 20:00 น.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[#F4E2C3]/60 text-xs tracking-widest uppercase">
                                วันจันทร์
                            </p>
                            <p className="text-[#F4E2C3]/30 text-xs tracking-wider">
                                Closed
                            </p>
                        </div>
                    </div>
                </div>

                {/* Col 3 — Contact */}
                <div className="flex flex-col gap-4">
                    <p className="text-[#F4E2C3]/30 text-xs tracking-widest uppercase">
                        Find Us
                    </p>
                    <div className="w-8 h-px bg-[#F4E2C3]/10" />
                    <div className="flex flex-col gap-4 mt-2">

                        {/* Address */}
                        <a
                            href="https://goo.gl/maps/HgvEfrn8Kym"
                            target="_blank"
                            rel="noreferrer"
                            className="flex gap-3 items-start group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14" height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-[#F4E2C3]/30 mt-0.5 shrink-0 group-hover:text-[#c9a84c] transition-colors duration-300"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <p className="text-[#F4E2C3]/40 text-xs tracking-wide leading-loose group-hover:text-[#F4E2C3]/60 transition-colors duration-300">
                                7/1 ถ.หลานหลวง แขวงวัดโสมนัส<br />
                                เขตป้อมปราบศัตรูพ่าย<br />
                                กรุงเทพมหานคร 10100
                            </p>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:026252000"
                            className="flex gap-3 items-center group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14" height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-[#F4E2C3]/30 shrink-0 group-hover:text-[#c9a84c] transition-colors duration-300"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            <p className="text-[#F4E2C3]/40 text-xs tracking-wider group-hover:text-[#F4E2C3]/60 transition-colors duration-300">
                                02 625 2000
                            </p>
                        </a>

                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#F4E2C3]/5 py-6 flex items-center justify-center px-8">
                <p className="text-[#F4E2C3]/20 text-xs tracking-widest uppercase">
                    © 2024 Eden Cafe — All rights reserved
                </p>
            </div>

        </footer>
    )
}