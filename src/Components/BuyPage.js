import React, { useState, useEffect } from "react";
import Axios from "axios";
import CardItem from "./CardItem";
import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";

const localurl = "https://api.jsonbin.io/b/5ee62ec719b60f7aa959d69c/1";

const BuyPage = ({ addItem }) => {
	const [product, setproduct] = useState([]);

	const fetchphotos = async () => {
		const { data } = await Axios.get(localurl);

		const { photos } = data;

		const allProduct = photos.map((photos) => ({
			smallimage: photos.src.medium,
			tinyimage: photos.src.tiny,
			productName: random.word(),
			productPrice: commerce.price(),
			id: random.uuid(),
		}));

		setproduct(allProduct);
	};

	useEffect(() => {
		fetchphotos();
	}, []);

	return (
		<Container fluid>
			<h1 className="text-success text-center">Buy NOW</h1>
			<Row>
				{product.map((product) => (
					<Col md={4} key={product.id}>
						<CardItem product={product} addItem={addItem} />
					</Col>
				))}
			</Row>
		</Container>
	);
};
export default BuyPage;
