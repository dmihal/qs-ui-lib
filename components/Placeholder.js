import React, { Component } from 'react';
import PropTypes from 'prop-types';

 /**
 * Image placeholders
 *
 * This is an complex placeholder that fetches images
 * based on what attributes you feed into it
 */

const Placeholder = ({ subject, width, height }) => {

	const Subjects = (width, height) => {
		return {
			animal: `http://placeimg.com/${width}/${height}/animals`,
			bacon: `http://baconmockup.com/${width}/${height}`,
			bear: `http://www.placebear.com/${width}/${height}`,
			beard: `http://placebeard.it/${width}/${height}`,
			cat: `http://lorempixel.com/${width}/${height}/cats`,
			city: `http://lorempixel.com/${width}/${height}/city`,
			food: `http://lorempixel.com/${width}/${height}/food`,
			nature: `http://lorempixel.com/${width}/${height}/nature`,
			people: `http://lorempixel.com/${width}/${height}/people`
		}
	}

	const getImageUrl = (subject, width, height) => {
		return Subjects(width, height)[subject];
	}

	return (
		<div>
			<img
				className="placeholder"
				src={getImageUrl(subject, width, height)}
				alt={subject}
				width={width}
				height={height}
			/>
			<style jsx>{`
				.placeholder {
					background: #ccc;
				}
			`}</style>
		</div>
	)
}

Placeholder.propTypes = {
	/**
	 * Placeholder subject
	 */
	subject: PropTypes.oneOf([
		'animal',
		'bacon',
		'beard',
		'bear',
		'cat',
		'food',
		'city',
		'nature',
		'people'
	]),
	/**
	 * Placeholder width
	 */
	width: PropTypes.number,
	/**
	 * Placeholder height
	 */
	height: PropTypes.number,
}

Placeholder.defaultProps = {
	subject: 'animal',
	width: 150,
	height: 150,
}

export default Placeholder