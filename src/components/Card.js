import React from 'react'; //must include because we are using jsx

const Card = ({ id,name,email }) => {
	return (
		//can return only one element at a time...
		<div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
		<img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		);
}

export default Card;