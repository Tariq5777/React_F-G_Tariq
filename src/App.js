import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Feedback from "./Feedback";
import Navbar from "./Navbar";
import Table from "./Table";

const App = () => {
	const [dataPresent, setDataPresent] = useState(false);

	useEffect(() => {
		if(localStorage.getItem("feedback1")) setDataPresent(true);
	}, localStorage)


	return (
		<>
		<Navbar tablePresent = {dataPresent}/>
		<br/>
		<Container>
			{ !dataPresent && <h4 style={{color:"red"}}>Table link will not be availible until one form is filled</h4>}
			<h1>Aromatic Bar</h1>
			<Feedback />
			{ dataPresent && <Table/>}
        </Container>
		</>
    );
};

export default App;
