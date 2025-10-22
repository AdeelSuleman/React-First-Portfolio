import { PROJECTS } from "../constants/index.js"
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="pb-4">
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl font-semibold bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent" 
        // style={{ textShadow: '5px 6px 8px yellow' }}
        >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((items, index) => {
            return(
          <div key={index} className="pb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              className="w-full lg:w-1/4 ">
              <img
                src={items.image}
                width={250}
                height={250}
                alt={items.title}
                className="mb-6 rounded "
              />
            </motion.div>
            <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
              className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{items.title}</h3>
              <p className="mb-4 text-stone-400">{items.description}</p>
              {items.technologies.map((tech,index) => {
                return(
                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>{tech}</span>
                )
              })}
            </motion.div>
          </div>
        )
        })}
      </div>
    </div>
  );
};

export default Project;
