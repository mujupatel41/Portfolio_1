import { RiBootstrapFill, RiReactjsLine, RiTailwindCssFill, RiTailwindCssLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) =>({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


export default function Technologies(){
    return(
        <div className="pb-24">
            <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className="my-20 text-center text-4xl">Technologies</motion.h2>

            <motion.div 
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ opacity:0, x: -100 }}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4">

                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    >
                   <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>

                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-4">
                    <SiExpress className="text-7xl text-cyan-100" />
                </motion.div>

                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className="p-4">
                    <SiMongodb className="text-7xl text-amber-300" />
                </motion.div>

                <motion.div className="p-4"
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}>
                    <svg style={{width:0, height:0, position:'absolute'}} aria-hidden="true" focusable="false">
                        <linearGradient id="mysql-gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00758f" /> 
                        <stop offset="100%" stopColor="#f29111" />
                        </linearGradient>
                    </svg>
                    <SiMysql style={{ fill: "url(#mysql-gradient)" }} className="text-7xl" />
                </motion.div>

                <motion.div className="p-4"
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)}>
                    <RiTailwindCssFill className="text-7xl text-cyan-300" />
                </motion.div>

                <motion.div className="p-4"
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}>
                    <RiBootstrapFill className="text-7xl text-purple-700" />
                </motion.div>

                
                <motion.div className="p-4"
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}>
                    <SiMysql className="text-7xl text-gradient-to-r from-stone-300 to-stone-600 text-transparent" />
                </motion.div>
                
            </motion.div>
        </div>
    )
}