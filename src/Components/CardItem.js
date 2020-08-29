import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from "reactstrap";

const CardItem = ({ product, addItem }) => {
	return (
		<Card className="mt-2 mb-1">
			<CardImg top height="150" width="90%" src={product.smallimage} />
			<CardBody className="Text-center">
				<CardTitle>{product.productName}</CardTitle>
				<CardText className="secondary">
					Price : Rs{product.productPrice}
				</CardText>
				<Button color="success" onClick={() => addItem(product)}>
					Buy Now
				</Button>
			</CardBody>
		</Card>
	);
};

export default CardItem;
