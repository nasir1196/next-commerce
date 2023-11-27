"use client"
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCartProps {
    data: any
}

const ProductCart: React.FC<ProductCartProps> = ({ data }) => {
    return (
        <motion.div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 text-center text-sm"
            initial={{ x: 0 }}
            transition={{ duration: 2 }}
            whileHover={{ scale: 1.3 }}
        >
            <motion.div className="flex flex-col items-center w-full gap-1">
                <motion.div className="aspect-square overflow-hidden relative w-full">
                    <Image src={data.images[0].image} alt={data.name} fill className="w-full h-full object-contain" />
                </motion.div>
                <motion.div></motion.div>
                <motion.div></motion.div>
                <motion.div></motion.div>
                <motion.div></motion.div>
            </motion.div>

        </motion.div>
    );
}

export default ProductCart;