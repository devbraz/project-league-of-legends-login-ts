import {
	VStack,
	Image,
	Box,
	Text,
	Flex,
	Input,
	Button,
	HStack,
	Link,
	useToast,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	useBreakpointValue,
} from "@chakra-ui/react";

import { useState, useRef } from "react";

import riotlogo from "../../assets/img/riotgameslogo.png";
import { LoginVersionModal } from "../Modal/VersionModal/LoginVersionModal";
import { theme } from "../../styles/theme";
import { SlideDrawerMobile } from "../Modal/SlideDrawerMobile/SlideDrawerMobile";

import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiOutlineArrowRight } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import {
	BsFillExclamationCircleFill,
	BsFillExclamationDiamondFill,
} from "react-icons/bs";

export const LoginForm = () => {
	const toast = useToast();
	const userInput = useRef<any>();
	const passwordInput = useRef<any>();

	const [userInputValueLength, setUserInputValueLength] = useState(false);
	const [userInputValue, setUserInputValue] = useState("");
	const [passwordInputValue, setPasswordInputValue] = useState("");
	const [userInputClick, setUserInputClick] = useState(false);
	const [passwordInputClick, setPasswordInputClick] = useState(false);
	const [checkboxInputClick, setCheckboxInputClick] = useState(false);
	const [show, setShow] = useState(false);

	const handleShowPasswordClick = () => setShow(!show);
	const handleSignIn = () => {
		return toast({
			position: "bottom",
			duration: 2000,
			render: () => (
				<Flex
					w={["100%", "500px"]}
					h="80px"
					p="10px"
					bg="yellow.500"
					alignItems="center"
					color="white"
					borderRadius="5px"
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
		<Flex
			position="relative"
			w={["100%", "100%", "25%"]}
			h="100%"
			minW={["0", "450px"]}
			justifyContent="center"
		>
			{!isWideVersion && <SlideDrawerMobile />}
			<VStack
				as="form"
				position="relative"
				w={["90%", "65%", "75%"]}
				h="100vh"
				pt="20%"
				pb="10%"
				justifyContent="space-between"
				flexDir="column"
			>
				<Image src={riotlogo} alt="Riot Logo" w="125px" h="35px" />

				<VStack
					w="100%"
					spacing="20px"
					justifyContent="center"
					flexDir="column"
					alignItems="center"
				>
					<Text
						mb="10px"
						color="login.black"
						fontSize="1.5rem"
						fontWeight="600"
						fontFamily="tertiary"
					>
						Fazer login
					</Text>
					<InputGroup flexDir="column" w="100%" zIndex="0">
						<InputLeftElement
							w="auto"
							h="auto"
							m={userInputClick ? "5px" : "18px"}
							ml={userInputClick ? "11px" : "18px"}
							color={
								userInputValueLength
									? "login.infoModalHover"
									: "login.inputText"
							}
							fontSize={userInputClick ? "0.6rem" : "0.75rem"}
							fontWeight={userInputClick ? "500" : "700"}
							fontFamily="tertiary"
							pointerEvents="none"
							transition="all 0.2s ease"
							children={<Text>NOME DE USUÁRIO</Text>}
						/>
						<Input
							ref={userInput}
							type="text"
							defaultValue=""
							w="100%"
							p="25px 10px 10px 10px"
							bg={userInputValueLength ? "login.errorInputBg" : "login.input"}
							border={
								userInputValueLength
									? `2px solid ${theme.colors.login.errorInputBorder}`
									: `2px solid ${theme.colors.login.input}`
							}
							borderColor="none"
							borderRadius="5px"
							color="login.black"
							fontWeight="700"
							outline="none"
							boxShadow="none"
							_focusVisible={{ boder: "none" }}
							_focus={{
								outline: "none",
								bg: `${
									userInputValueLength ? "login.errorInputBg" : "login.white"
								}`,
								border: `${
									userInputValueLength
										? `2px solid ${theme.colors.login.errorInputBorder}`
										: `2px solid ${theme.colors.login.buttonAppleHover}`
								}`,
							}}
							_hover={{
								borderColor: "none",
								bg: `${
									userInputValueLength
										? "login.errorInputBg"
										: "login.inputHover"
								}`,
							}}
							onBlur={() => {
								userInputValue.length > 0
									? setUserInputClick(true)
									: setUserInputClick(false);
								userInputValue.length === 1
									? setUserInputValueLength(true)
									: setUserInputValueLength(false);
							}}
							onFocus={() => setUserInputClick(true)}
							onChange={() => setUserInputValue(userInput.current.value)}
						/>
						{userInputValueLength && (
							<Flex gap="7px">
								<Box mt="7px">
									<BsFillExclamationDiamondFill
										color={`${theme.colors.login.infoModalHover}`}
									/>
								</Box>
								<Text fontWeight="700" color="login.infoModal">
									Deve ter pelo menos 2 caracteres.
								</Text>
							</Flex>
						)}
					</InputGroup>
					<InputGroup w="100%" zIndex="0">
						<InputLeftElement
							w="auto"
							h="auto"
							m={passwordInputClick ? "5px" : "18px"}
							ml={passwordInputClick ? "11px" : "18px"}
							fontSize={passwordInputClick ? "0.6rem" : "0.75rem"}
							fontWeight={passwordInputClick ? "500" : "700"}
							fontFamily="tertiary"
							pointerEvents="none"
							transition="all 0.2s ease"
							children={<Text>SENHA</Text>}
						/>
						<Input
							ref={passwordInput}
							type={show ? "text" : "password"}
							w="100%"
							p="25px 10px 10px 10px"
							bg="login.input"
							border={`2px solid ${theme.colors.login.input}`}
							borderColor="none"
							borderRadius="5px"
							color="login.black"
							fontWeight="700"
							outline="none"
							boxShadow="none"
							_hover={{
								border: "login.buttonAppleHover",
								bg: "login.inputHover",
							}}
							_focusVisible={{ boder: "none" }}
							_focus={{
								outline: "none",
								bg: "login.white",
								border: `2px solid ${theme.colors.login.buttonAppleHover}`,
							}}
							onBlur={() => {
								passwordInputValue.length > 0
									? setPasswordInputClick(true)
									: setPasswordInputClick(false);
							}}
							onFocus={() => {
								setPasswordInputClick(true);
							}}
							onChange={() =>
								setPasswordInputValue(passwordInput.current.value)
							}
						/>
						{passwordInputClick && (
							<InputRightElement top="30%" right="5%">
								<Box cursor="pointer" onClick={handleShowPasswordClick}>
									{show ? (
										<IoIosEye fontSize="25px" color="black" />
									) : (
										<IoIosEyeOff fontSize="25px" color="black" />
									)}
								</Box>
							</InputRightElement>
						)}
					</InputGroup>
					<HStack w="100%" justifyContent="space-between">
						<Button
							w="30%"
							h="40px"
							bg="login.buttonFacebook"
							border={`2px solid ${theme.colors.login.bgForm}`}
							borderRadius="5px"
							_hover={{ bg: "login.buttonFacebookHover" }}
							onClick={() =>
								toast({
									position: "bottom",
									duration: 2000,
									render: () => (
										<Flex
											w={["100%", "500px"]}
											h="80px"
											p="10px"
											bg="red.500"
											borderRadius="5px"
											alignItems="center"
											color="white"
										>
											<BsFillExclamationCircleFill fontSize="50px" />
											<Flex flexDir="column" ml="10px">
												<Text fontWeight="700">Error...</Text>
												<Text fontSize={["0.7rem", "1rem"]}>
													Recurso de entrar com a conta do facebook está
													atualmente indisponível.
												</Text>
											</Flex>
										</Flex>
									),
								})
							}
						>
							<RiFacebookCircleFill fill="white" fontSize="25px" />
						</Button>
						<Button
							w="30%"
							h="40px"
							bg="login.white"
							border={`2px solid ${theme.colors.login.inputHover}`}
							borderRadius="5px"
							_hover={{ bg: "login.buttonGoogleHover" }}
							onClick={() =>
								toast({
									position: "bottom",
									duration: 2000,
									render: () => (
										<Flex
											w={["100%", "500px"]}
											h="80px"
											p="10px"
											bg="red.500"
											borderRadius="5px"
											alignItems="center"
											color="white"
										>
											<BsFillExclamationCircleFill fontSize="50px" />
											<Flex flexDir="column" ml="10px">
												<Text fontWeight="700">Error...</Text>
												<Text fontSize={["0.7rem", "1rem"]}>
													Recurso de entrar com a conta do google está
													atualmente indisponível.
												</Text>
											</Flex>
										</Flex>
									),
								})
							}
						>
							<FcGoogle fontSize="25px" />
						</Button>
						<Button
							w="30%"
							h="40px"
							bg="login.black"
							border={`2px solid ${theme.colors.login.bgForm}`}
							borderRadius="5px"
							_hover={{ bg: "login.buttonAppleHover" }}
							onClick={() =>
								toast({
									position: "bottom",
									duration: 2000,
									render: () => (
										<Flex
											w={["100%", "500px"]}
											h="80px"
											p="10px"
											bg="red.500"
											borderRadius="5px"
											alignItems="center"
											color="white"
										>
											<BsFillExclamationCircleFill fontSize="50px" />
											<Flex flexDir="column" ml="10px">
												<Text fontWeight="700">Error...</Text>
												<Text fontSize={["0.7rem", "1rem"]}>
													Recurso de entrar com a conta da apple está atualmente
													indisponível.
												</Text>
											</Flex>
										</Flex>
									),
								})
							}
						>
							<AiFillApple fill="white" fontSize="25px" />
						</Button>
					</HStack>
					<Flex
						position="relative"
						w="100%"
						flexDir="row"
						alignContent="flex-start"
						alignItems="flex-end"
					>
						{checkboxInputClick && (
							<Box
								display="block"
								position="absolute"
								w="6px"
								h="10px"
								m="2.5px 0 0 5px"
								bottom="7px"
								left="2px"
								border="2px solid white"
								borderLeft="none"
								borderTop="none"
								transform="rotate(45deg)"
								zIndex="1"
								onClick={() => {
									checkboxInputClick
										? setCheckboxInputClick(false)
										: setCheckboxInputClick(true);
								}}
							/>
						)}

						<Input
							type="checkbox"
							w="20px"
							h="20px"
							bg={checkboxInputClick ? "login.buttonSubmit" : "login.input"}
							border="none"
							borderRadius="5px"
							onClick={() => {
								checkboxInputClick
									? setCheckboxInputClick(false)
									: setCheckboxInputClick(true);
							}}
						/>
						<Text ml="10px">Manter login</Text>
					</Flex>
				</VStack>

				<Box textAlign="center">
					{userInputValue.length > 1 && passwordInputValue.length > 0 ? (
						<Button
							w="75px"
							h="75px"
							bg="login.buttonSubmit"
							border={`2px solid ${theme.colors.login.buttonSubmit}`}
							borderRadius="25px"
							_hover={{
								bg: "login.buttonSubmitHover",
								border: `2px solid ${theme.colors.login.buttonSubmitHover}`,
							}}
							_active={{
								bg: "login.buttonSubmitActive",
								border: `2px solid ${theme.colors.login.buttonSubmitActive}`,
							}}
							onClick={handleSignIn}
						>
							<AiOutlineArrowRight
								fontSize="30px"
								color={`${theme.colors.login.white}`}
							/>
						</Button>
					) : (
						<Button
							type="submit"
							w="75px"
							h="75px"
							bg="login.bgForm"
							border={`2px solid ${theme.colors.login.version}`}
							borderRadius="25px"
							disabled
						>
							<AiOutlineArrowRight
								fontSize="30px"
								color={`${theme.colors.login.version}`}
							/>
						</Button>
					)}

					<Box mt="6%">
						<Flex flexDir="column">
							<Box>
								<Link
									href="#"
									fontWeight="700"
									_hover={{ textDecor: "none", color: "login.black" }}
									onClick={handleSignIn}
								>
									NÃO CONSEGUE INICIAR SESSÃO?
								</Link>
							</Box>
							<Box>
								<Link
									href="#"
									fontWeight="700"
									_hover={{ textDecor: "none", color: "login.black" }}
									onClick={handleSignIn}
								>
									CRIAR CONTA
								</Link>
							</Box>
						</Flex>
					</Box>
				</Box>
				<LoginVersionModal />
			</VStack>
		</Flex>
	);
};
