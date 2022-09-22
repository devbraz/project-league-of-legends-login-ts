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
						w="35px"
						h="35px"
						bg="transparent"
						mr="5"
						shadow={[
							"1px 1px 4px grey",
							"1px 1px 4px grey",
							"2px 2px 8px black",
						]}
						onClick={() => setSoundMuted(false)}
						_hover={{ bg: "transparent" }}
						_focus={{ bg: "transparent" }}
					>
						<RiVolumeMuteFill fill="white" />
						<Box
							shadow="2px 2px 8px black"
							borderRadius="5px"
							opacity="0.1"
							_hover={{
								bg: "grey.0",
								opacity: "0.1",
								filter: "blur(0)",
								transition: "all ease 0.3s",
							}}
							position="absolute"
							filter="blur(10px)"
							w="100%"
							h="100%"
						/>
					</Button>
				) : (
					<Button
						w="35px"
						h="35px"
						bg="transparent"
						mr="5"
						shadow={[
							"1px 1px 4px grey",
							"1px 1px 4px grey",
							"2px 2px 8px black",
						]}
						onClick={() => setSoundMuted(true)}
						_hover={{ bg: "transparent" }}
						_focus={{ bg: "transparent" }}
					>
						<RiVolumeUpFill fill="white" />
						<Box
							shadow="2px 2px 8px black"
							borderRadius="5px"
							opacity="0.1"
							_hover={{
								bg: "grey.0",
								opacity: "0.1",
								filter: "blur(0)",
								transition: "all ease 0.3s",
							}}
							position="absolute"
							filter="blur(10px)"
							w="100%"
							h="100%"
						/>
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
				h="100%"
				objectFit="cover"
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
