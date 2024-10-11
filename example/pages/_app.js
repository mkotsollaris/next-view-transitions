import { ViewTransitions } from 'next-view-transitions-page-router'

function MyApp({ Component, pageProps }) {
  return (
    <ViewTransitions>
      <div>
        <h1>Next.js View Transitions</h1>
        <p>
          Use{' '}
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API'
            target='_blank'
            rel="noopener noreferrer"
          >
            View Transitions API
          </a>{' '}
          in Next.js Page Router.{' '}
          <a
            href='https://github.com/shuding/next-view-transitions'
            target='_blank'
            rel="noopener noreferrer"
          >
            Source Code ↗
          </a>
        </p>
        <p className='support'>
          <span className='no'>
            ️🔴 Your browser doesn't support View Transitions.
          </span>
          <span className='yes'>
            ️🟢 Your browser supports View Transitions.
          </span>
        </p>
        <p></p>
        <div className='container'>
          <Component {...pageProps} />
        </div>
        <footer>
          <p>
            Created by{' '}
            <a href='https://twitter.com/shuding_' target='_blank' rel="noopener noreferrer">
              Shu Ding
            </a>
            . Source code on{' '}
            <a
              href='https://github.com/shuding/next-view-transitions'
              target='_blank'
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            . Licensed under MIT.
          </p>
        </footer>
      </div>
    </ViewTransitions>
  )
}

export default MyApp