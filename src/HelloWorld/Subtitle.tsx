import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Subtitle: React.FC<{
	subtitleText: string;
	subtitleColor: string;
}> = ({subtitleText, subtitleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = subtitleText.split(' ').map((t) => ` ${t} `);
	return (
		<h1
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: 40,
				textAlign: 'center',
				position: 'absolute',
				bottom: 160,
				width: '100%',
				// top: 10
			}}
		>
			{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							color: subtitleColor,
							// background: 'black',
							marginRight: 30,
							transform: `scale(${spring({
								fps: videoConfig.fps,
								frame: frame - i * 5,
								config: {
									damping: 100,
									stiffness: 200,
									mass: 0.5,
								},
							})})`,
							display: 'inline-block',
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
