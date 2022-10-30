import { useState, useEffect } from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
	// another option for arguments for useCounter is to pass a function and just call it inside useCounter
	// ex: useCounter((prevCounter) => {setCounter((prevCounter) => prevCounter + 1);} or similar)
	const counter = useCounter(false);

	return <Card>{counter}</Card>;
};

export default BackwardCounter;
