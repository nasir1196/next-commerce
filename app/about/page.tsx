"use client"
import { motion } from "framer-motion";
import Container from "../components/Container";


const About = () => {
    return (
        <div>
            <Container>
                <motion.div className="mt-24">
                    <motion.h1 className="text-4xl font-bold py-3">About Us</motion.h1>
                    <motion.p className="text-slate-400 py-5">
                        Aid Plants (Aid Plants) is created by news writers and bloggers. The main objective of Aid Plants is to deliver the latest information to the readers in the fastest way. Many expert writers work tirelessly day and night to create this news blog & health tips for daily life hacks.
                    </motion.p>

                    <motion.p className="text-slate-400 py-5">
                        The main objective of Aid Plants is to create a loyal base of its readers who watch online news on web and mobile. We are committed to provide fast and accurate news covering national, international, user interest information, funny news, astrology news, business news, health, sports news, lifestyle news etc.
                    </motion.p>

                    <motion.p className="text-slate-400 py-5">
                        At the time of planning of this website, all the owners and writers were completely sure as to why this news website was created. Social Media News and Technology User satisfaction is our priority, this was the only reason why this brain child took almost a year to take shape.
                    </motion.p>

                    <motion.p className="text-slate-400 py-5">
                        Aid Plants aims to provide users with information that helps them in daily life, as well as content that provides entertainment and satisfies the desire to read.
                    </motion.p>
                    <motion.p className="text-slate-400 py-5">
                        You will get every type of information on this website –
                    </motion.p>
                    <motion.div>
                        <motion.ul>
                            <motion.li>Health Care</motion.li>
                            <motion.li>Entertainment News</motion.li>
                            <motion.li>TV Shows</motion.li>
                            <motion.li>Tech News</motion.li>
                            <motion.li>Web-Stories</motion.li>
                            <motion.li>Loan</motion.li>
                            <motion.li>Insurance</motion.li>
                            <motion.li>Gaming</motion.li>
                            <motion.li>Cryptocurrency</motion.li>
                            <motion.li>Auto</motion.li>
                            <motion.li>and more</motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
}

export default About;