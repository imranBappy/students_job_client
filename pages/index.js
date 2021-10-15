import Head from 'next/head'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Pricing from '../components/Pricing/Pricing'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <title>Student part time jobs</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
      </Head>
      <Navbar/>

      <main>
       
        <div className="container">
           <Header/>
          <Pricing/>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
      </main>

      <footer className="bg-dark" style={{padding:'5px 0px'}}>
        <p style={{padding:'12px 0px 0px 0px'}} className="text-muted text-center"> ALL RIGHTS RESERVED © 2021 | PRIVACY POLICY | TERMS OF SERVICE </p>
      </footer>
    </>
  )
}
