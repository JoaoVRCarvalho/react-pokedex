import { useState, useRef, useCallback, useEffect } from 'react'

function useInfiniteScroll() {
	const [extraLimit, setExtraLimit] = useState(5);
	const loadRef = useRef(null);

	const handleObserver = useCallback((entries) => {
		const [target] = entries;
		if (target.isIntersecting) setExtraLimit(prev => prev + 5)
	}, [])

	useEffect(() => {
		const option = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		};

		const observer = new IntersectionObserver(handleObserver, option)

		if (loadRef.current) {
			observer.observe(loadRef.current)
		};

	}, [handleObserver]);

	return { loadRef, extraLimit }
}

export default useInfiniteScroll;