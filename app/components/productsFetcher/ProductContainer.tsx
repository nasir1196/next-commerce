"use client"
import { motion } from 'framer-motion'
import { products } from '../../../utils/product'
import { truncateText } from '../../../utils/truncateText'


const ProductContainer = () => {
    return (
        <motion.div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
            {
                products.map((product: any) => (
                    <motion.div key={product.id} initial={{ x: 0 }} animate={{ x: [0, 50, 0] }} transition={{ duration: 1.5, delay: 0.2 }} whileHover={{ scale: 1.2 }}>
                        {truncateText(product.name)}
                    </motion.div>
                ))
            }

        </motion.div>
    );
}

export default ProductContainer;