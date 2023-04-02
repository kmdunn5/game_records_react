'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Card } from '@mui/material'
// import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import GamesShow from './components/games/Show'

const inter = Inter({ subsets: ['latin'] })

// const useStyles:any = makeStyles({
//   card: {
//     height: '50%'
//   }
//   // root: {
//   //   '&$selected': {
//   //     backgroundColor: "rgba(255, 255, 255, 0.12)",
//   //     color: "#D8D8D8",
//   //     '&:hover': {
//   //       backgroundColor: "rgba(255, 255, 255, 0.15)"
//   //     }
//   //   },
//   //   borderColor: "#979797",
//   //   borderRadius: 2,
//   //   color: "#D8D8D8",
//   //   fontWeight: 600,
//   //   marginTop: 10,
//   //   marginBottom: 10,
//   //   textTransform: "uppercase",
//   //   width: "100%"
//   // }
// });

export default function Home() {
  const [show, setShow] = useState<Boolean>(false)
  
  // const styles = useStyles()

  return (
    <div>
      <Card style={{height: '50%'}}>
        <div>Welcome</div>
        <button onClick={() => setShow(!show)}>Show show</button>
      </Card>
      <Card>
        {show && <GamesShow />}
      </Card>
    </div>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //     <div className={styles.thirteen}>
    //       <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
    //     </div>
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={inter.className}>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p className={inter.className}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
