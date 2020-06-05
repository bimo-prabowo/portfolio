import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="Reusing same component with different input!" />
      <p>Such wow. Very React.</p>
    </div>
  )
}