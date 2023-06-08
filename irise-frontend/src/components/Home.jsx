import React from 'react'

const Home = () => {
  const style = {
    color: "red",
    backgroundColor: "green",
    padding: "30px"
  }
  const styleForHome = {
    backgroundColor: "blue"
  }
  return (
    <div style={style}>
      <h1 style={styleForHome}>Home</h1>
    </div>
  )
}

export default Home