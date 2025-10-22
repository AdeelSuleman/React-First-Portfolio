import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"


const Experience = () => {
  return (
   <div className="pb-4">
    <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">Experience</motion.h2>
    <div>
        {EXPERIENCES.map((exper,i) => {
            return(
                <div key={i} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-stone-400">
                            {exper.year}
                        </p>
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1}}
                        className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold">
                            {exper.role} -{""}
                            <span className="text-sm text-stone-500">{exper.company}</span>
                        </h3>
                        <p className="mb-4 text-stone-400">{exper.description}</p>
                        {exper.technologies.map((tech,i) => {
                            return(
                                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300" key={i}>
                                    {tech}
                                </span>
                            )
                        })}
                    </motion.div>
                </div>
            )
        })}
    </div>
   </div>
  )
}

export default Experience