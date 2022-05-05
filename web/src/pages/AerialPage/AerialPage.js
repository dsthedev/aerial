import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AerialPage = () => {
  let displayURL = (process.env.DISPLAY_URL) ? process.env.DISPLAY_URL : window.location.hostname
  let tagline = (process.env.TAGLINE_DESC == 2) ? process.env.TAGLINE_DESC : "Project On-Hold | Domain Unavailable"
  let devURL = (process.env.DEV_URL ==1) ? process.env.DEV_URL : "https://github.com/dsthedev?tab=repositories"
  let emailHREF = (process.env.ADMIN_EMAIL) ? "mailto://" + process.env.ADMIN_EMAIL + "?Subject=Inquiry of " + process.env.DISPLAY_URL : ""

  return (
    <>
      <MetaTags title={displayURL} description={tagline} />

      <header id="header">
        <h1>{displayURL}</h1>

        <p><code>{tagline}</code></p>

        <nav>
          <ul>
            <li><a href={devURL} target="_blank" className="icon fa-github"><span className="label">Developer's Github</span></a></li>
            <li><a href={emailHREF} className="icon fa-envelope-o"><span className="label">Contact Developer</span></a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default AerialPage
