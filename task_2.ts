import React, { Component, useEffect } from 'react';

// было
const FunctionalCounter = ({ count }) => {
	// do smth...

	useEffect(() => {
		// This code runs when `count` changes.
		console.log(`Count has changed to: ${count}`);
	}, [count]);  // Dependency array includes `count`, so effect runs on count change.

	return (
		<div>Count: {count}</div>
	);
};

// стало

class ClassCounter extends Component {
	componentDidUpdate(prevProps) {
		if (prevProps.count !== this.props.count) {
			// This code runs when `count` changes.
			console.log(`Count has changed to: ${this.props.count}`);
		}
	}

	render() {
		const { count } = this.props;
		return (
			<div>Count: {count}</div>
		);
	}
}

export default ClassCounter;
