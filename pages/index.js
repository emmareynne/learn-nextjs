import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { getHugoPostData } from '../lib/hugosite'
import Link from 'next/link'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  getHugoPostData()
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Emma. I'm a software engineer and a translator (English/Japanese).</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.listItem}>
          {allPostsData.map(({ id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              <Link href={`/posts/${id}`}>
                <a>Link</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}