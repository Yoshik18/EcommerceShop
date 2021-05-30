import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<div>
			<Card className='my-2 p-3' style={{ width: '18rem' }}>
				<Link to={`/product/${product._id}`}>
					<Card.Img variant='top' src={product.image} />
				</Link>
				<Card.Body>
					<Link to={`/product/${product._id}`}>
						<Card.Title>{product.name}</Card.Title>
					</Link>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
					<Card.Text as='h4'>${product.price}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Product;
