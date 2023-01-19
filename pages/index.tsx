import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/components/layouts/Header/Header"
import Profile from "@/components/layouts/Profile/Profile"
import Skill from '@/components/layouts/Skill/Skill'
import Toptitle from '@/components/layouts/TopTitle/Toptitle'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ike-d portfolio</title>
        <meta name="description" content="ike-d's portfolio site.Application engineer working in Tokyo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Toptitle />
        <Profile />
        <Skill />
      </main>
    </>
  )
}
