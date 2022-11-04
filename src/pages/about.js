import React from "react"
import Layout from "../components/Layout"

function about() {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <p>Lets change something</p>
        <p>
          OK. Jestem w branchu o nazwie secondBranch
          teraz dodam sobie commita 
          na branchu secondBranch poszedł git rebase main pozniej checkout na main i git rebase secondBranch
          teraz commit
        </p>
        <p>
          rozwiązujemy zagadki gita <br />
          one eternity later xD
        </p>
      </div>
    </Layout>
  )
}

export default about
