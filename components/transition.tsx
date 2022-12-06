import {AnimatePresence, motion} from "framer-motion";
import {useRouter} from "next/router";


const Transition = ({children}) => {

  const variants = {
    scaleDown: {
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.2
      }
    },
    out: {
      x: "-100%",
      transition: {
        duration: 0.2,
        delay: 0.3
      }
    },
    in: {
      scale: 0.8,
      y: 100,
      x: "100%",
      transition: {
        duration: 0.2
      }
    },
    center: {
      x: 0,
      scale: 0.8,
      transformOrigin: 'top',
      transition: {
        duration: 0.2
      }
    },
    scaleUp: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.3
      }
    },
  };

  const {asPath} = useRouter();

  return (
    <div className='effect'>
      <AnimatePresence
        initial={false}
        exitBeforeEnter>
        <motion.div
          className='page-animation-wrapper'
          key={asPath}
          variants={variants}
          initial="in"
          animate={["center", "scaleUp"]}
          exit={["scaleDown", "out"]}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
