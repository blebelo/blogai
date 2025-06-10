import Image from "next/image";
import styles from "./styles/NavBar.module.css";
import React from "react";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {

    const router = useRouter();
    
    const handleSignIn = () => {
         router.push('/login');
    }
    const handleSignUp = () => {
        return router.push('/signup');
    }

    return (
        <div className={styles.navbar}>
            <Image
            className={styles.logo}
            src="/blog-ai_logo.png"
            alt="Blog AI logo"
            width={150}
            height={150}
            priority
            />

            <div className={styles.buttons}>
                <button onClick={handleSignIn} className={styles.login}>Sign In</button>
                <button onClick={handleSignUp} className={styles.register}>Register</button>
            </div>
        </div>
    )
}

export default NavBar;