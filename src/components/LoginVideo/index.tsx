import { useRef, useState } from "react";
import { videos } from "./videos";
import { Box, Flex, Button, keyframes } from "@chakra-ui/react";

import { RiVolumeUpFill, RiVolumeMuteFill } from "react-icons/ri";
import { LoginInfoModal } from "../Modal/LoginInfoModal";
import { LoginUserModal } from "../Modal/LoginUserModal";

interface videoItem {
	video: string;
	id: number;
}

const mymove = keyframes`
  to {
    from {background: white;}
    to {background: black;}
	}
`;

export const LoginVideo = () => {
	const refVideo = useRef<any>(null);
	const [soundMuted, setSoundMuted] = useState(true);
	const [randomNumber, setRandomNumber] = useState(random(videos));

	let selected = videos[randomNumber].video;

	function random(videos: videoItem[]) {
		let randomGenerated = Math.floor(Math.random() * videos.length);
		return randomGenerated;
	}

	const ended = () => {
		refVideo.current.load();
		refVideo.current.play();
	};

	return (
		<Box w="75%" h="100vh">
			<Flex justifyContent="flex-end" position="fixed" w="75%" zIndex="1">
				{soundMuted ? (
					<Button
						w="40px"
						h="25px"
						bg="transparent"
						fontSize="2xl"
						p="5px 10px 0 10px"
						onClick={() => setSoundMuted(false)}
						_hover={{
							bg: "red",
							filter: "opacity(0.3) drop-shadow(0 0 0 red)",
						}}
					>
						<RiVolumeMuteFill fill="white" fontSize="20px" />
					</Button>
				) : (
					<Button onClick={() => setSoundMuted(true)}>
						<RiVolumeUpFill fill="white" fontSize="20px" />
					</Button>
				)}
			</Flex>

			<Flex
				justifyContent="space-between"
				position="fixed"
				w="75%"
				p="45px 2.5rem 0 2.5rem"
			>
				<LoginInfoModal />
				<LoginUserModal />
			</Flex>

			<Box
				as="video"
				position="absolute"
				w="75%"
				h="100%"
				top="50%"
				objectFit="cover"
				transform="translate(0, -50%)"
				zIndex="1"
				animation={`${mymove} 3s linear`}
				autoPlay
				ref={refVideo}
				muted={soundMuted}
				onEnded={() => {
					setRandomNumber(random(videos));
					ended();
				}}
				src={selected}
				typeof="video/mp4"
			/>
		</Box>
	);
};
