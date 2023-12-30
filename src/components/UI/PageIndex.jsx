import { Helmet } from "react-helmet-async";

const PageIndex = ({ title, description, children }) => (
	<>
		<Helmet>
			<meta property="og:title" content={title ? `Sky Fortress | ${title}` : "Sky Fortress"} />
			{description && <meta property="og:description" content={description} />}
			<meta property="og:image" content="./img/prevlink.png" />
			<link rel="icon" href="./icon/main.ico" />
			<title>{title ? `Sky Fortress | ${title}` : "Sky Fortress"}</title>
			<meta name="Sky Fortress Odyssey, Guide, Transmit, Tier liest" content={description} />
		</Helmet>

		{children}
	</>
);

export default PageIndex;
