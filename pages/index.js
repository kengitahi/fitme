import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Nav, Hero, Testimonials, PopularDiets, DeliveryAreas, MakeAnOrder, Why, BlogSection, FAQ, Footer } from '../components'
import { Container } from '@material-ui/core'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fit Me</title>
        <meta name="description" content="Delicious Meals Delivered To You!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container disableGutters={true}>
        <Nav />
        <Hero />
        <Testimonials />
        <PopularDiets />
        <DeliveryAreas />
        <MakeAnOrder />
        <Why />
        <BlogSection />
        <FAQ />
        <Footer />
      </Container>
    </div>
  )
}
