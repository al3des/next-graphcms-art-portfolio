import Head from 'next/head'
import { getAllCategories } from '@/lib/graphcms'

import HomeCategories from '@/components/utils/home-categories-list'

export default function Home(props) {
  return (
      <> 
          <Head>
        <title>Paloma Zamorano Ferrari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomeCategories items={props.categories} />
      </>
  )
}

export async function getStaticProps() {
  const categories = await getAllCategories()
  return {
    props: {
      categories
    }
  }
}