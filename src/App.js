import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Container, Row, Col } from "reactstrap";

import BuyPage from "./Components/BuyPage";
import { toast, ToastContainer } from "react-toastify";
import Cart from "./Components/Cart";

function App() {
	const [carditem, setcarditem] = useState([]);

	const addItem = (item) => {
		const isAlreadyAdded = carditem.findIndex(function (array) {
			return array.id === item.id;
		});

		if (isAlreadyAdded !== -1) {
			toast("Already added", { type: "error" });
			return;
		}

		setcarditem([...carditem, item]);
	};

	const Buynow = () => {
		setcarditem([]);
		toast("Purchase Complete", { type: "success" });
	};

	const remove = (item) => {
		setcarditem(carditem.filter((singleitem) => singleitem.id !== item.id));
	};
	return (
		<Container>
			<ToastContainer />
			<Row>
				<Col md={8}>
					<BuyPage addItem={addItem} />
				</Col>
				<Col md={4}>
					<Cart carditem={carditem} removeItem={remove} buyNow={Buynow} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
