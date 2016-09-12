const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./landing')
const Search = require('./search')
const Layout = require('./layout')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter

const App = () => (
  <Router history={hashHistory}>
  <Route path ='/' component = {Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search}/>
    </Route>
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('app'))
