import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Logo: React.FC<{
	transitionStart: number;
}> = ({transitionStart}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scaleIn = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const translation = interpolate(
		spring({
			frame: frame - transitionStart,
			fps: videoConfig.fps,
			config: {
				damping: 200,
				mass: 0.2,
			},
		}),
		[0, 1],
		[0, -150]
	);

	const scale = frame < 200 ? scaleIn : 1;

	return (
		<div
			style={{
				position: 'absolute',
				width: videoConfig.width,
				height: videoConfig.height,
				alignItems: 'center',
				justifyContent:'center',
				display: 'flex',
				transform: `scale(${scale}) translateY(${translation+100}px)`,
			}}
		>
			<img src='https://www.chess.com/bundles/web/images/brand/chesscom_pawn.8c9d0cf5.png' style={{width:500, height:500}}/>
		</div>
	);
};
