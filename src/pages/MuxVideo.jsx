import MuxPlayer from '@mux/mux-player-react'
import Container from '@mui/material/Container'
import TagsInputs from '../component/TagsInput';
const MuxVideo = () => {
  return ( 
    <Container>
    <h1>Mux Video Player</h1>
    <TagsInputs/>
    {/* <MuxPlayer
      streamType="on-demand"
      playbackId="UQwm9kwBtupE5W5IY001qSJqV01TpxuJOWkhY1T5FjSGE"
      metadata={{
        video_id: "video-id-54321",
        video_title: "Test video title",
        viewer_user_id: "user-id-007",
      }}
    /> */}
    </Container>
   );
}
 
export default MuxVideo;