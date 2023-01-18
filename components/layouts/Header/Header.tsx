import styles from '@/styles/components/Header/Header.module.css'
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';

export default function Header(){
    return(
        <>
            <header className={styles.header}>
                <h2>ike-d</h2>
                <div>
                    <nav className="p-2 h-12">
                        <ul className={styles.headerMenu}>
                            <li className='p-2'>
                                <Scroll to="toptitle" smooth={true}>Home</Scroll>
                            </li>
                            <li className='p-2'>
                                <Scroll to="profile" smooth={true}>Profile</Scroll>
                            </li>
                            <li className='p-2'>
                                <Scroll to="skill" smooth={true}>Skill</Scroll>
                            </li>
                            <li className='p-2'>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScGLfkuS1KsVZfqJZ-pBqVs-FSbC2kyZFNgs-baSMzgCsN8nw/viewform?usp=sf_link"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}