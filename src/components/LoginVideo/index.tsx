import { useRef, useState } from "react";
import { videos } from "./videos";
import { Box, Flex, Button, keyframes } from "@chakra-ui/react";

import { RiVolumeUpFill, RiVolumeMuteFill } from "react-icons/ri";
import { LoginInfoModal } from "../Modal/InfoModal/LoginInfoModal";
import { LoginUserModal } from "../Modal/UserModal/LoginUserModal";

interface videoItem {
	video: string;
	id: number;
}

const bgTransition = keyframes`
  to {
    from {background: white;}
    to {background: black;}
	}
`;

export const LoginVideo = () => {
	const randomVideo = (videos: videoItem[]) => {
		let randomGenerated = Math.floor(Math.random() * videos.length);
		return randomGenerated;
	};
	const refVideo = useRef<any>(null);
	const [soundMuted, setSoundMuted] = useState(true);
	const [randomNumber, setRandomNumber] = useState(randomVideo(videos));
	const handleSoundChange = () => setSoundMuted(!soundMuted);

	let selected = videos[randomNumber].video;

	const ended = () => {
		refVideo.current.load();
		refVideo.current.play();
		refVideo.current.volume = 0.01;
	};

	return (
		<Box w="75%" h="100vh" position="relative">
			<Flex position="absolute" w="100%" justifyContent="flex-end">
				<Button
					w="35px"
					h="35px"
					bg="transparent"
					borderRadius="5px"
					m="5px 5px 0 0"
					shadow={["1px 1px 4px grey", "1px 1px 4px grey", "2px 2px 8px black"]}
					_hover={{ bg: "transparent" }}
					_focus={{ bg: "transparent" }}
					onClick={handleSoundChange}
					zIndex="1"
				>
					{soundMuted ? (
						<RiVolumeMuteFill fill="white" />
					) : (
						<RiVolumeUpFill fill="white" />
					)}
					<Box
						position="absolute"
						w="100%"
						h="100%"
						borderRadius="5px"
						shadow="2px 2px 8px black"
						filter="blur(10px)"
						opacity="0.1"
						_hover={{
							bg: "grey.0",
							opacity: "0.1",
							filter: "blur(0)",
							transition: "all ease 0.3s",
						}}
					/>
				</Button>
			</Flex>

			<Flex position="absolute" justifyContent="space-between" w="100%">
				<LoginInfoModal />
				<LoginUserModal />
			</Flex>

			<Box
				as="video"
				ref={refVideo}
				src={selected}
				typeof="video/mp4"
				autoPlay
				muted={soundMuted}
				h="100%"
				objectFit="cover"
				animation={`${bgTransition} 3s ease all`}
				onLoadStart={() => (refVideo.current.volume = 0.01)}
				onEnded={() => {
					setRandomNumber(randomVideo(videos));
					ended();
				}}
			/>
		</Box>
	);
};
