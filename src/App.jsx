import "./App.css"
import Row from "./components/Row/Row"
import Col from "./components/Col/Col"

function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Row>
        <Col bp={{ md: 1, sm: 1, xs: 3 }}></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col bp={{ md: 1, sm: 1, xs: 3 }}></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default App
