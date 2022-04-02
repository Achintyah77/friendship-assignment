import React from 'react'
import Header from './Component/Header';
import AddRelation from './Component/addRelation';
import Findrelation from './Component/findRelation'
import { Route, Routes, Link } from "react-router-dom";
export default  function App() {
  return (
		<div>
			<Header />
			<Routes>
				<Route exact path='/' element={<AddRelation/>}/>
				<Route exact path='/findrelation' element={<Findrelation />} />
			</Routes>
		</div>
	);
}


