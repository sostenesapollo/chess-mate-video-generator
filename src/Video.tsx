import {Audio} from 'remotion'
import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {Gifs} from './HelloWorld/Gifs';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Gifs"
				component={Gifs}
				durationInFrames={5000}
				fps={30}
				width={1920}
				height={1080}
			/> 
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={4454}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/> 
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
