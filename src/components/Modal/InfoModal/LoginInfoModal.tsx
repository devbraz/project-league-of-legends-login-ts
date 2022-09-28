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
					color="white"
					p="10px"
					bg="yellow.500"
					h="80px"
					w="500px"
					borderRadius="5px"
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
	return (
		<>
			<Flex flexDir="column" alignItems="center" mt="30px" ml="30px" zIndex="1">
				<Button
					p="10px"
					bg={isOpen ? "login.infoModalHover" : "login.infoModal"}
					borderRadius="3px"
					shadow="1px 1px rgba(0, 0, 0, 0.11),2px 2px rgba(0, 0, 0, 0.11), 4px 4px rgba(0, 0, 0, 0.11)"
					transform="rotate(45deg)"
					_hover={{ bg: "login.infoModalHover" }}
					_focus={{ bg: "login.infoModalHover" }}
					onMouseEnter={onOpen}
				>
					<Box transform="rotate(-45deg)">
						<FaExclamation fontSize="20px" color="black" />
					</Box>
				</Button>
			</Flex>
			<Modal onClose={onClose} isOpen={isOpen}>
				<ModalContent
					display="flex"
					position="absolute"
					h="50vh"
					w="400px"
					left={["50vw", "32vw", "30vw"]}
					bg="login.bgForm"
					borderRadius="5px"
					onMouseLeave={onClose}
					fontFamily="tertiary"
				>
					<Box
						position="absolute"
						w="40px"
						h="40px"
						left="-5px"
						top="30.5px"
						bg="login.bgForm"
						borderRadius="3px"
						transform="rotate(45deg)"
						zIndex="-1"
					/>
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
					<Link
						fontWeight="700"
						m="10px 0 25px 50px"
						_hover={{ textDecor: "none", color: "login.black" }}
						onClick={handleLink}
					>
						MAIS DETALHES
					</Link>
				</ModalContent>
			</Modal>
		</>
	);
};
