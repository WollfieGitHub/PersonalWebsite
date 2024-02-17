import {Box} from "@mui/material";

interface PlaylistProps {

}

export default function Playlist(
	{}: PlaylistProps,
) {

	return <Box id={"playlist"} p={1}>
		<iframe
			style={{ borderRadius:"12px"}} src={"https://open.spotify.com/embed/playlist/6pplJujXSMb3Z9BSVXrDkq?utm_source=generator"}
			width="100%" height="352" allowFullScreen={false}
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
	</Box>;
}