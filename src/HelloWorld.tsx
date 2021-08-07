import {Audio} from 'remotion'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';
import {Gifs} from './HelloWorld/Gifs';
import audio from './audio.mp3'

export const HelloWorld: React.FC<{
	subtitleText: string;
	subtitleColor: string;
}> = ({subtitleText, subtitleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[60, 70],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 5;

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<Audio src={audio} />
			<div style={{opacity}}>
				<Sequence from={0} durationInFrames={100} >
					<Logo transitionStart={transitionStart} />
				</Sequence> 
				<Sequence from={0} durationInFrames={100}>
					<Title titleText='ChessMate' titleColor={subtitleColor} />
				</Sequence>
				<Sequence from={20} durationInFrames={50}>
					<Subtitle subtitleText="Every Chess Match" subtitleColor="grey"/>
				</Sequence>
			</div>
			<Sequence from={120} durationInFrames={4350}>
				<Gifs />
			</Sequence>
		</div>
	);
};
