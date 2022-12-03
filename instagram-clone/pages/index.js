import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './components/Login'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="h-screen">
      <Header/>
      <Login/>
    </div>
  )
}
