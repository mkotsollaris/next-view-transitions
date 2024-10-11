import { Link, useTransitionRouter } from 'next-view-transitions-page-router'
import Head from 'next/head'

export default function Home() {
  const router = useTransitionRouter()

  return (
    <>
      <Head>
        <title>Next.js View Transitions</title>
        <meta name="description" content="Using native CSS View Transitions API in Next.js Page Router" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <nav>
          <ul>
          <img style={{width: '50%'}} src='/opengraph-image.png'></img>
            <li>
              <Link href='#demo'>Demo</Link>
            </li>
            <li>
              <Link href='#disclaimer'>Disclaimer</Link>
            </li>
            <li>
              <Link href='#installation'>Installation</Link>
            </li>
            <li>
              <Link href='#usage'>Usage</Link>
            </li>
          </ul>
        </nav>
        <h2 id='demo'>
          <span className='demo'>Demo</span>
        </h2>
        <p>
          <Link href='/demo'>Go to /demo →</Link>
        </p>
        <p>
          <a
            onClick={(e) => {
              e.preventDefault()
              router.push('/demo', {
                // Optional custom transition
                onTransitionReady: slideInOut,
              })
            }}
            href='/demo'
          >
            Go to /demo with custom transition →
          </a>
        </p>
        {/* Rest of the content... */}
      </div>
    </>
  )
}

function slideInOut() {
  // ... (same as before)
}