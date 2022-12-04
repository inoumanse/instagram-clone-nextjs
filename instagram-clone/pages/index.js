import Head from 'next/head'
//import Image from 'next/image'
import Image from 'next/legacy/image'
import styles from '../styles/Home.module.css'
import Login from './components/Login'
import Header from './components/Header'
import Stories from './components/Strories'
import Feed from './components/Feed'
import NewsFeedandHeader from './components/NewsFeedandHeader'

export default function Home() {
  return (
    <div>
      <Login/>
    </div>
  )
}
/*
export default function Header_Final(){
  return(
    <div className='h-screen'>
      <Header/>
    </div>
  )
}*/
