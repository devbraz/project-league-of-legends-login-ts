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
				bottom={["3%", "3%", "45px"]}
				left={["75%", "65%", "330px"]}
				alignSelf="end"
				m="0"
				bg="transparent"
				fontSize="0.7rem"
				fontFamily="tertiary"
				_hover={{ color: "login.black", bg: "transparent" }}
				_active={{ bg: "transparent" }}
				onClick={onOpen}
			>
				V 5 8 . 0 . 0
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					w={["100%", "600px", "600px"]}
					h={["100%", "400px", "400px"]}
					top={["0", "28%", "28%"]}
					borderRadius="5px"
					shadow={`rgba(0, 0, 0, 0.76) 0px 22px 70px 4px`}
					zIndex="3"
				>
					<Flex justifyContent="flex-end">
						<Button
							w="35px"
							h="35px"
							m="20px"
							bg="login.input"
							borderRadius="5px"
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
								color="login.black"
								fontSize="1.5rem"
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
							justifyContent="center"
							bg="login.input"
							borderBottomLeftRadius="5px"
							borderBottomRightRadius="5px"
						>
							<Button
								w="500px"
								h="60px"
								m="30px 0 30px 0"
								bg="login.userModalBg"
								borderRadius="10px"
								color="login.white"
								fontWeight="600"
								fontSize="1.3rem"
								_hover={{ bg: "login.buttonAppleHover" }}
								_active={{ bg: "login.buttonAppleHover" }}
								onClick={onClose}
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
