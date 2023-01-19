import styles from '@/styles/components/Profile/Profile.module.css'

export default function Profile(){
    return(
        <>
            <div className={styles.profile} id="profile">
                <h2 className='catch'>Profile</h2>
                <div className={styles.description}>
                    <div>
                        1995年生まれ京都出身のエンジニア。<br />
                        横浜国立大学経済学部を卒業後、新卒で入社したITコンサル企業に入社。未経験ながらプログラミング研修での評価が良かったためそのまま開発系のPJを志望。暗号資産(当時は仮想通貨)、FXといった金融サービスの開発に携わる一方、プライベートにてfirebaseを使ったサーバレス開発やフロントエンドにも触れる。<br />
                        その後、フロントエンドやモバイルアプリの開発を経験後、AIサービス企業に転職。アプリケーションエンジニアとして、フロントエンド/バックエンド/インフラまで幅広く担当し日々奮闘中🔥
                    </div>
                </div>
            </div>
        </>
    )
}