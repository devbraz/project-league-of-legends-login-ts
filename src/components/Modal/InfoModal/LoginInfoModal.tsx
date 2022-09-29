import {
	Button,
	Modal,
	ModalContent,
	useDisclosure,
	Flex,
	Box,
	Text,
	Link,
	useToast,
	useBreakpointValue,
} from "@chakra-ui/react";

import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { FaExclamation } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

import { InfoData } from "./InfoData";

export const LoginInfoModal = () => {
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleLink = () => {
		return toast({
			position: "bottom",
			duration: 2000,
			render: () => (
				<Flex
					h="80px"
					w={["100%", "500px"]}
					bg="yellow.500"
					borderRadius="5px"
					p="10px"
					color="white"
					alignItems="center"
				>
					<BsFillExclamationDiamondFill fontSize="50px" />
					<Flex flexDir="column" ml="10px">
						<Text fontWeight="700">Atenção!</Text>
						<Text>Acesso indisponível no momento.</Text>
					</Flex>
				</Flex>
			),
		});
	};

	const isWideVersion = useBreakpointValue({
		base: false,
		md: true,
	});

	return (
		<>
			<Flex flexDir="column" alignItems="center" mt="45px" ml="40px" zIndex="1">
				<Button
					position="relative"
					p="10px"
					bg={
						isOpen
							? ["transparent", "transparent", "login.infoModalHover"]
							: ["transparent", "transparent", "login.infoModal"]
					}
					borderRadius="3px"
					shadow={["1px 1px 4px grey", "1px 1px 4px grey", "2px 2px 8px black"]}
					transform="rotate(45deg)"
					opacity={["0.7", "0.7", "1"]}
					transition={!isWideVersion ? "all ease 0.4s" : undefined}
					_hover={{
						bg: ["transparent", "transparent", "login.infoModalHover"],
						opacity: "1",
					}}
					_focus={{
						bg: ["transparent", "transparent", "login.infoModalHover"],
					}}
					onMouseEnter={isWideVersion ? onOpen : undefined}
					onClick={!isWideVersion ? onOpen : undefined}
				>
					<Box transform="rotate(-45deg)">
						<FaExclamation fontSize="20px" color="black" />
					</Box>
					{!isWideVersion && (
						<Box
							position="absolute"
							w="100%"
							h="100%"
							shadow="2px 2px 8px black"
							opacity="0.3"
							_hover={{
								bg: ["login.black", "login.black", "login.input"],
								opacity: "0.1",
								transition: "all ease 0.7s",
							}}
						/>
					)}
				</Button>
			</Flex>
			<Modal onClose={onClose} isOpen={isOpen}>
				<ModalContent
					display="flex"
					position="absolute"
					h={["75%", "75%", "50%"]}
					w={["100%", "100%", "400px"]}
					left={["0", "0", "290px", "575px"]}
					top={["120px", "120px", "120px", "0"]}
					bg="login.bgForm"
					borderRadius="5px"
					fontFamily="tertiary"
					onMouseLeave={onClose}
				>
					{isWideVersion && (
						<Box
							position="absolute"
							w="40px"
							h="40px"
							left={["0", "0", "50%", "-5px"]}
							top={["0", "0", "-5px", "45px"]}
							bg="login.bgForm"
							borderRadius="3px"
							transform="rotate(45deg)"
							zIndex="-1"
						/>
					)}
					<Box
						overflowX="auto"
						p="50px"
						sx={{
							"&::-webkit-scrollbar": {
								width: "6px",
								height: "4px",
								border: "0",
							},
							"&::-webkit-scrollbar-track": {
								width: "6px",
								height: "6px",
							},
							"&::-webkit-scrollbar-thumb": {
								background: "login.buttonSubmitActive",
								borderRadius: "4px",
							},
						}}
					>
						{InfoData.map((data) => {
							return (
								<Box key={data.InfoId} mb="20px">
									<Text fontWeight="600" color="login.black">
										{data.InfoTitle}
									</Text>
									<Flex alignItems="center" gap="5px">
										<MdAccessTimeFilled />
										<Text fontWeight="700" color="login.inputText">
											{data.InfoTime}
										</Text>
									</Flex>
									<Text color="login.black">{data.InfoDescription}</Text>
								</Box>
							);
						})}
					</Box>
					<Box m="10px 0 25px 50px">
						<Link
							fontWeight="700"
							_hover={{ textDecor: "none", color: "login.black" }}
							onClick={handleLink}
						>
							MAIS DETALHES
						</Link>
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};
