import {
	Button,
	Modal,
	ModalContent,
	useDisclosure,
	Flex,
	Box,
	Text,
	useToast,
	VStack,
	useBreakpointValue,
} from "@chakra-ui/react";

import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import { theme } from "../../../styles/theme";

export const LoginUserModal = () => {
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleClick = () => {
		return toast({
			position: "bottom",
			duration: 2000,
			render: () => (
				<Flex
					w={["100%", "500px"]}
					h="80px"
					p="10px"
					alignItems="center"
					bg="yellow.500"
					borderRadius="5px"
					color="white"
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
			<Flex flexDir="column" alignItems="center" mt="40px" mr="40px" zIndex="1">
				<Button
					w="55px"
					h="55px"
					bg="transparent"
					borderRadius="20px"
					shadow={["1px 1px 4px grey", "1px 1px 4px grey", "2px 2px 8px black"]}
					opacity="0.7"
					transition="all ease 0.7s"
					_hover={{ bg: "transparent", opacity: "1" }}
					_focus={{ bg: "transparent" }}
					onClick={onOpen}
					zIndex="1"
				>
					<FaUserAlt
						fill={
							isWideVersion
								? `${theme.colors.login.white}`
								: `${theme.colors.login.black}`
						}
						fontSize="25px"
					/>
					<Box
						position="absolute"
						w="100%"
						h="100%"
						borderRadius="20px"
						shadow="2px 2px 8px black"
						opacity="0.2"
						_hover={{
							bg: ["login.black", "login.black", "login.input"],
							opacity: "0.1",
							transition: "all ease 0.7s",
						}}
					/>
				</Button>
			</Flex>

			<Modal onClose={onClose} isOpen={isOpen}>
				<ModalContent
					position="absolute"
					display="flex"
					h="200px"
					w="270px"
					top={["120px", "120px", "100px", "40px"]}
					right={["undefined", "undefined", "4px", "110px"]}
					left={isWideVersion ? undefined : "0"}
					p="35px"
					bg="login.userModalBg"
					fontFamily="tertiary"
					fontWeight="700"
				>
					<VStack w="100%" h="100%" spacing="10px">
						<Button
							w="100%"
							h="40px"
							borderRadius="10px"
							bg="transparent"
							pl="10px"
							justifyContent="flex-start"
							_hover={{ bg: "login.userModalBgHover" }}
							_active={{ bg: "login.userModalBgHover" }}
							onClick={handleClick}
						>
							CONFIGURAÇÕES
						</Button>
						<Button
							w="100%"
							h="40px"
							borderRadius="10px"
							bg="transparent"
							pl="10px"
							justifyContent="flex-start"
							_hover={{ bg: "login.userModalBgHover" }}
							_active={{ bg: "login.userModalBgHover" }}
							onClick={handleClick}
							disabled
						>
							ENCERRAR SESSÃO
						</Button>
						<Button
							w="100%"
							h="40px"
							borderRadius="10px"
							bg="transparent"
							pl="10px"
							justifyContent="flex-start"
							_hover={{ bg: "login.userModalBgHover" }}
							_active={{ bg: "login.userModalBgHover" }}
							onClick={handleClick}
						>
							SAIR
						</Button>
					</VStack>
				</ModalContent>
			</Modal>
		</>
	);
};
