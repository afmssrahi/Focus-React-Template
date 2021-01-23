import { Helmet } from 'react-helmet';

// import Local Assets
import LandingPage from './pages/LandingPage';

function App() {
	return (
		<div>
			<Helmet>
				{/* mobile metas */}
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='viewport'
					content='initial-scale=1, maximum-scale=1'
				/>
				{/* site metas */}
				<title>Focus</title>
				<meta name='keywords' content='' />
				<meta name='description' content='' />
				<meta name='author' content='' />
				{/* Tweaks for older IEs */}
				<link
					rel='stylesheet'
					href='https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'
				/>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css'
					media='screen'
				/>
			</Helmet>

			<LandingPage />
		</div>
	);
}

export default App;
