import Image from "next/image";
import styles from "./styles/NavBar.module.css";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <Image
            className={styles.logo}
            src="/blog-ai_logo.png"
            alt="Blog AI logo"
            width={100}
            height={100}
            priority
            />

            <div className={styles.buttons}>
                <button className={styles.login}>Sign In</button>
                <button className={styles.register}>Register</button>
            </div>
        </div>
    )
}

export default NavBar;