import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import smooth from "./utils/smooth";
import licenseH from "./utils/license";

const App = () => {
	useEffect(() => {
		smooth();
		licenseH();
	}, []);

  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;