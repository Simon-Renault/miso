import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="en" className="no-fouc">
				<Head    >
					<link rel="icon" href="/favicon.jpg" />
					<link rel="preconnect" href="https://fonts.googleapis.com"></link>
					<link rel="shortcut icon" href="/static/favicon.jpg" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=optional"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Cardo&display=optional"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script> </script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
