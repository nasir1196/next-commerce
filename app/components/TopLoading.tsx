"use client"
import { motion, useScroll } from "framer-motion"

const TopLoading =()=>{
    const { scrollYProgress } = useScroll()
    return(
        <motion.div style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            height: 5,
            background: "red",
            transformOrigin: "0%",
            zIndex: "1000"
          }}></motion.div>
    )
}

export default TopLoading;