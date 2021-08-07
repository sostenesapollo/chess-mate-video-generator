import {useVideoConfig} from 'remotion'
import {Gif} from '@remotion/gif'
 
export const Gifs: React.FC = () => {
  const {width, height} = useVideoConfig()
 
  return (
	<div style={{width, height, display:'flex', justifyContent:"center"}}>
		<Gif
			src="https://images.chesscomfiles.com/uploads/game-gifs/90px/green/vintage/0/cc/0/0/bEIhVGtBMFNndlpKYnM5em11OCFmdFlJZWc1UWlxekdzbUpBdEFHUEJJN2RmZFBJanpJMGNqNlphYzk3bUJRQnZCWnlBcnlyQnI3ZGNkNDZnZiE5Zm1UQ2RjNmNqYzFUckdDUm10MDdHQTdZQVJZUnpIUnBvdzNOdG1ORm12OTB2b0Z3bndwd293MFJxeVJKY3FKQ3FJV09IUFRMd0ZMRHVEQ0RGTkRMSXVMQ3VuQ0xuRlNLRk1LQ011TFRORVRLRU1LSk1MT0d1bjJNTE1KQU1MQXpMQ3p5Q0p5SEpS.gif"
			fit="fill"
			// style={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'center', alignSelf:'center'}}
    />
	</div>
  )
}