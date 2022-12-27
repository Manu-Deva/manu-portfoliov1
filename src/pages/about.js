import * as React from 'react';
import Layout from "../components/layout";

const AboutPage = () => {
	return (
		<Layout pageTitle="About me">
			<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
		</Layout>
		// <main>
		// 	<h1> About me</h1>
		// 	<Link to="/">Back to Home</Link>
		// 	<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
		// </main>
	)
}

export const Head = () => <title>About me</title>

export default AboutPage