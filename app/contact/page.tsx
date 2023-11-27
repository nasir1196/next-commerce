"use client"
import { motion } from "framer-motion";
import Container from "../components/Container";


const Contact = () => {
    return (
        <div>
            <Container>
                <motion.div className="mt-24">
                    <motion.h1 className="text-4xl font-bold py-3">Contact Us</motion.h1>
                    <motion.p className="text-slate-400 py-5">Any Query?</motion.p>
                    <motion.p>We love hearing from our readers! If you have any questions, suggestions, or just want to say hello, please feel free to reach out to us. You can contact us using the information provided below, or you can fill out the contact form.</motion.p>
                </motion.div>
            </Container>
        </div>
    );
}

export default Contact;