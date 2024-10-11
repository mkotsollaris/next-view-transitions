import Head from 'next/head'

export default function Demo() {
  return (
    <>
      <Head>
        <title>Demo - Next.js View Transitions</title>
      </Head>
      <div>
        <img style={{width: '50%'}} src='/opengraph-image.png'></img>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h2>
          This is the <span>demo</span>
        </h2>
        <p>OK you just saw the demo :)</p>
        <a
          href='/'
          onClick={(e) => {
          }}
        >
          ← Back to homepage
        </a>
      </div>
    </>
  )
}