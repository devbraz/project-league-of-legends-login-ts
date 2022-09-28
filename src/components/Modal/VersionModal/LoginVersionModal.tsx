import {
	Modal,
	ModalOverlay,
	ModalContent,
	Button,
	Text,
	useDisclosure,
	Flex,
	VStack,
} from "@chakra-ui/react";
import { GrFormClose } from "react-icons/gr";
import { theme } from "../../../styles/theme";

export const LoginVersionModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button
				position="absolute"
				alignSelf="end"
				bottom={["3%", "3%", "45px"]}
				left={["75%", "65%", "300px"]}
				m="0"
				fontSize="0.7rem"
				fontFamily="tertiary"
				onClick={onOpen}
				bg="transparent"
				_hover={{ color: "login.black", bg: "transparent" }}
				_active={{ bg: "transparent" }}
			>
				V 5 8 . 0 . 0
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					w={["100%", "600px", "600px"]}
					h={["100%", "400px", "400px"]}
					borderRadius="5px"
					top={["0", "28%", "28%"]}
					shadow={`rgba(0, 0, 0, 0.76) 0px 22px 70px 4px`}
					zIndex="3"
				>
					<Flex justifyContent="flex-end">
						<Button
							m="20px"
							w="35px"
							h="35px"
							borderRadius="5px"
							bg="login.input"
							_hover={{ bg: "login.inputHover" }}
							_active={{ bg: "login.inputHover" }}
							onClick={onClose}
						>
							<GrFormClose
								color={`${theme.colors.login.black}`}
								fontSize="25px"
							/>
						</Button>
					</Flex>
					<Flex h="100%" flexDir="column" justifyContent="space-between">
						<VStack spacing="10px">
							<Text
								cursor="default"
								fontSize="1.5rem"
								color="login.black"
								fontWeight="600"
							>
								v58.0.0
							</Text>
							<Text cursor="default" color="login.modalText" fontSize="1.1rem">
								Foundation: 0000000
							</Text>
							<Text cursor="default" color="login.modalText" fontSize="1.1rem">
								UX: 0000000
							</Text>
							<Text cursor="default" color="login.modalText" fontSize="1.1rem">
								SDK: 00.0.00.0000000
							</Text>
						</VStack>

						<Flex
							bg="login.input"
							justifyContent="center"
							borderBottomLeftRadius="5px"
							borderBottomRightRadius="5px"
						>
							<Button
								w="500px"
								h="60px"
								m="30px 0 30px 0"
								fontWeight="600"
								fontSize="1.3rem"
								onClick={onClose}
								bg="login.userModalBg"
								color="login.white"
								borderRadius="10px"
								_hover={{ bg: "login.buttonAppleHover" }}
								_active={{ bg: "login.buttonAppleHover" }}
							>
								OK
							</Button>
						</Flex>
					</Flex>
				</ModalContent>
			</Modal>
		</>
	);
};
