import Header from '../components/Header/Header'
import Pricing from '../components/Pricing/Pricing'
import Layout from './Layout';
export default function Home() {
  return (
    <>
      <Layout title="Students For Jobs">
          <Header/>
          <Pricing/>
      </Layout>
    </>
  )
}