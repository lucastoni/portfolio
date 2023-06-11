import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const LandingPage: React.FC<PageProps> = () => {
  return (
    <div> INDEX</div>
  )
}

export default LandingPage

export const Head: HeadFC = () => <title>Home Page</title>
