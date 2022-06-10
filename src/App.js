import { render } from "react-dom"
import Navbar from "./Navbar"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Header
        title='Bring everyone together to build better products.'
        intro='Manage makes it simple for software teams to plan day-to-day tasks
      while keeping the larger team goals in view.'
      />
      <Main />
      <Footer />
    </div>
  )
}

render(<App />, document.getElementById("root"))
