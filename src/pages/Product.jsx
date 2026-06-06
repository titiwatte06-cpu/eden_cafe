// mock data ไว้ก่อน เดี๋ยวค่อยเปลี่ยนเป็น fetch จาก backend
const mockProducts = [
    { id: 1, name: "Espresso",      category: "Coffee",  price: 65 },
    { id: 2, name: "Latte",         category: "Coffee",  price: 85 },
    { id: 3, name: "Matcha Latte",  category: "Matcha",  price: 95 },
    { id: 4, name: "Cold Brew",     category: "Coffee",  price: 90 },
    { id: 5, name: "Cappuccino",    category: "Coffee",  price: 85 },
    { id: 6, name: "Croissant",     category: "Bakery",  price: 75 },
    { id: 7, name: "Banana Bread",  category: "Bakery",  price: 80 },
    { id: 8, name: "Americano",     category: "Coffee",  price: 70 },
]

export function Product() {
    return (
        <div className="min-h-screen bg-[#2D3635]">

            {/* Page Header */}
            <div className="py-20 text-center">
                <p className="text-xs tracking-widest text-[#F4E2C3]/40 uppercase mb-4">
                    Eden Cafe
                </p>
                <h1 className="text-4xl md:text-6xl font-light tracking-widest text-[#F4E2C3] uppercase">
                    Our Menu
                </h1>
                <div className="mt-6 w-12 h-px bg-[#F4E2C3]/30 mx-auto" />
            </div>

            {/* Product Grid */}
            <div className="max-w-6xl mx-auto px-8 pb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F4E2C3]/10">
                    {mockProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </div>
    )
}

function ProductCard({ product }) {
    return (
        <div className="
            bg-[#2D3635] p-8
            flex flex-col gap-4
            cursor-pointer group
            transition-colors duration-300
            hover:bg-[#1E3932]
        ">
            {/* Image placeholder — เดี๋ยวเปลี่ยนเป็น <img> จาก backend */}
            <div className="
                w-full aspect-square
                border border-[#F4E2C3]/10
                flex items-center justify-center
                group-hover:border-[#F4E2C3]/30
                transition-colors duration-300
            ">
                <span className="text-[#F4E2C3]/20 text-xs tracking-widest uppercase">
                    photo
                </span>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1">
                <p className="text-[#F4E2C3]/40 text-xs tracking-widest uppercase">
                    {product.category}
                </p>
                <p className="text-[#F4E2C3] text-sm tracking-widest uppercase font-light">
                    {product.name}
                </p>
                <p className="text-[#F4E2C3]/60 text-xs tracking-wider">
                    ฿{product.price}
                </p>
            </div>

            {/* Add button */}
            <button className="
                mt-auto w-full py-2
                border border-[#F4E2C3]/20 
                text-[#F4E2C3]/40 text-xs tracking-widest uppercase
                hover:border-[#F4E2C3]/60 hover:text-[#F4E2C3]
                transition-colors duration-300
            ">
                Add to Cart
            </button>
        </div>
    )
}