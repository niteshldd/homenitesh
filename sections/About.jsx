'use client';
import {motion} from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import {fadeIn, staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} >
    <div className="gradient-02 z-0" />
    <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once: false, amount: 0.25}}
     className={`{styles.innerwidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Nitesh Sonali"
      textStyles="text-center"
      />
    </motion.div>
  </section>
);

export default About;
