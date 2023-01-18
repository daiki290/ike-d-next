import Image from 'next/image'
import styles from '@/styles/components/Toptitle/Toptitle.module.css'

export default function Toptitle(){
    return(
        <>
            <div className={styles.toptitle} id="toptitle">
                <div>
                    <h1>
                        Daiki Ikemizu                    
                    </h1>
                    <p>Application engineer working in Tokyo</p>
                </div>
                <div className={styles.link} >
                    <a href="https://github.com/daiki290"
                    target="_blank"
                    rel="noopener noreferrer">
                        <Image
                            src="/github-mark.svg"
                            alt="13"
                            width={24}
                            height={24}
                            priority
                            
                            />
                    </a>
                    <a href="https://qiita.com/ike-d"
                    target="_blank"
                    rel="noopener noreferrer">
                        <Image
                            src="/qiita-logo.png"
                            alt="13"
                            width={24}
                            height={24}
                            priority
                            />
                    </a>
                    <a href="https://twitter.com/D290Kei"
                    target="_blank"
                    rel="noopener noreferrer">
                        <Image
                            src="/twitter-logo.svg"
                            alt="13"
                            width={24}
                            height={24}
                            priority
                            />
                    </a>
                </div>
            </div>
        </>
    )
}