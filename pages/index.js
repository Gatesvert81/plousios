import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main className='bg-black/80 main__bg flex flex-col justify-center items-left' >
        <video width="100%" height="100%" loop autoPlay pla >
          <source src="plousios.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.main>

    </div>
  )
}
