import React from "react";
import * as Data from "./data/data.json";

import Header from "./Components/header";
import ListLayout from "./Components/listLayout";
import Footer from "./Components/footer";

import Wrapper from "./sharedComponents/wrapper";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Wrapper>
				<ListLayout posts={Data} />
			</Wrapper>
			<Footer />
		</div>
	);
}

export default App;
