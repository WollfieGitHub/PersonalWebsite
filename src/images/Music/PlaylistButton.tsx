import {Dialog, IconButton} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpotify} from "@fortawesome/free-brands-svg-icons"
import {useState} from "react";
import Playlist from "./Playlist";

interface PlaylistButtonProps {

}

export default function PlaylistButton(
	{}: PlaylistButtonProps,
) {
	const [menuOpen, setMenuOpen] = useState(false);
	const showMenu = () => setMenuOpen(true);
	const hideMenu = () => setMenuOpen(false);

	return <>
		<IconButton onClick={showMenu}>
			<FontAwesomeIcon icon={faSpotify}/>
		</IconButton>
		<Dialog open={menuOpen} onClose={hideMenu}>
			<Playlist/>
		</Dialog>
	</>;
}