import { Fragment, useEffect } from "react"
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css/dist/js/materialize.min"
import "./App.css"
import Searchbar from "./components/layout/Searchbar"
import Logs from "./components/logs/Logs"
import AddBtn from "./components/layout/AddBtn"
import AddLogModal from "./components/logs/AddLogModal"

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit()
	})
	return (
		<Fragment>
			<Searchbar />
			<div className="container">
				<AddBtn />
				<AddLogModal />
				<Logs />
			</div>
		</Fragment>
	)
}

export default App
