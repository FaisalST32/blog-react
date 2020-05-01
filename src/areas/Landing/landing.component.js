import React, { useEffect, useState } from "react";
import Banner from "./banner/banner.component";
import Posts from "./posts/posts.component";
import classes from "./landing.module.css";

const Landing = () => {
	const [viewState, setViewState] = useState({
		currentPanel: 1,
		transitioning: false,
	});

	const PANELS_COUNT = 8;

	const prevSection = () => {
		console.log("prev section");
		setViewState((prev) => {
			if (prev.currentPanel <= 1 || prev.transitioning) return prev;
			setTimeout(() => {
				console.log("restoring view state");
				setViewState((prev) => ({ ...prev, transitioning: false }));
			}, 1000);
			return { transitioning: true, currentPanel: prev.currentPanel - 1 };
		});
	};

	const nextSection = () => {
		console.log("next section");
		setViewState((prev) => {
			if (prev.currentPanel >= PANELS_COUNT || prev.transitioning) return prev;
			setTimeout(() => {
				console.log("restoring view state");
				setViewState((prev) => ({ ...prev, transitioning: false }));
			}, 1000);
			return { transitioning: true, currentPanel: prev.currentPanel + 1 };
		});
	};

	const handleScroll = (e) => {
		if (e.deltaY > 0 && viewState.currentPanel < PANELS_COUNT) {
			nextSection();
		} else if (e.deltaY < 0 && viewState.currentPanel > 0) {
			prevSection();
		}
		return;
	};

	useEffect(() => {
		window.removeEventListener("wheel", (e) => {
			handleScroll(e);
		});
		window.addEventListener("wheel", (e) => {
			handleScroll(e);
		});
		return () => {
			window.removeEventListener("wheel", (e) => {
				handleScroll(e);
			});
		};
	}, []);

	return (
		<div className={classes.screenPane}>
			<div
				className={classes.panelsContainer}
				style={{ top: `${-100 * (viewState.currentPanel - 1)}vh` }}
			>
				<div className={classes.fullPanel}>
					<Banner />
				</div>
				<div className={classes.fullPanel} style={{backgroundColor: 'azure'}}>
					<Posts maxCount={3} />
					<div className={classes.panelLabel}>BLOGS</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
