import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'

const fourohfour = () => <h1>404 here</h1>

const App = () =>
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/search" component={Search} />
				<Route component={fourohfour} />
			</Switch>
		</div>
	</BrowserRouter>

export default App
