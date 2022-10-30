import { useState, useEffect } from "react";

// all custom hooks must start with "use"
// reminder: we can set default values for parameters so if we call the function with no parameter, it is assigned this default value
const useCounter = (forwards = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards) {
				setCounter((prevCounter) => prevCounter + 1);
			} else {
				setCounter((prevCounter) => prevCounter - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
		// we add forwards as a dependency for good practice; it might not ever change
	}, [forwards]);

	return counter;
};

export default useCounter;
