# Aerial

[![Netlify Status](https://api.netlify.com/api/v1/badges/70c412ac-93ab-48e2-ac6f-cbe5974f04e5/deploy-status)](https://app.netlify.com/sites/chipper-marshmallow-04769e/deploys)

A placeholder landing page made with RedwoodJS.

Currently, the goal of the project is to simply be a deployable landing page for unused domain names / archived projects.  Needs only a few ENV variables set to get started!

**ENV Vars**

> DISPLAY_URL=`domain.com`
>
> TAGLINE_DESC=`Project On-Hold, Domain Unavailable`
>
> DEV_URL=`https://github.com/**USERNAME**?tab=repositories`
>
> ADMIN_EMAIL=`email@address.com`

## Development

**Prerequisites**

> - [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x)
> - [Yarn](https://yarnpkg.com/) (>=1.15)
> - [Redwood Windows Development Guide](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

**Dev Tools**

Use git to clone for local development && run from terminal:

```
yarn install
yarn redwood dev
```

Opens to http://localhost:8706 with live-refresh on file change.

> **The Redwood CLI**
>
> ```
> yarn redwood --help
> ```
>
> [Full CLI Reference](https://redwoodjs.com/docs/cli-commands).
