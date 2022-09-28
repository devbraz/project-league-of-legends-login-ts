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
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiOutlineArrowRight } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import {
	BsFillExclamationCircleFill,
	BsFillExclamationDiamondFill,
} from "react-icons/bs";
import { LoginVersionModal } from "../Modal/VersionModal/LoginVersionModal";
import { theme } from "../../styles/theme";

// interface SignInData {
// 	user: string;
// 	password: string;
// }

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
					color="white"
					p="10px"
					bg="yellow.500"
					h="80px"
					w={["100%", "500px"]}
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
	// const isWideVersion = useBreakpointValue({
	// 	base: false,
	// 	md: true,
	// });
	return (
		<Flex
			w={["100%", "100%", "25%"]}
			minW={["0", "450px"]}
			h="100%"
			justifyContent="center"
		>
			<VStack
				as="form"
				position="relative"
				// onSubmit={() => handleSignIn}
				w={["90%", "65%", "75%"]}
				justifyContent="space-between"
				flexDir="column"
				pt="10%"
				pb="5%"
			>
				<Image src={riotlogo} alt="Riot Logo" w="125px" h="35px" />

				<VStack
					justifyContent="center"
					flexDir="column"
					alignItems="center"
					w="100%"
					h="25%"
					spacing="20px"
				>
					<Text
						color="login.black"
						fontSize="1.5rem"
						fontWeight="600"
						fontFamily="tertiary"
						mb="10px"
					>
						Fazer login
					</Text>
					<InputGroup flexDir="column" w="100%" zIndex="0">
						<InputLeftElement
							pointerEvents="none"
							w="auto"
							h="auto"
							fontSize={userInputClick ? "0.6rem" : "0.75rem"}
							fontWeight={userInputClick ? "500" : "700"}
							fontFamily="tertiary"
							m={userInputClick ? "5px" : "18px"}
							ml={userInputClick ? "11px" : "18px"}
							transition="all 0.2s ease"
							color={
								userInputValueLength
									? "login.infoModalHover"
									: "login.inputText"
							}
							children={<Text>NOME DE USUÁRIO</Text>}
						/>
						<Input
							ref={userInput}
							defaultValue=""
							type="text"
							w="100%"
							border={
								userInputValueLength
									? `2px solid ${theme.colors.login.errorInputBorder}`
									: `2px solid ${theme.colors.login.input}`
							}
							borderColor="none"
							borderRadius="5px"
							fontWeight="700"
							color="login.black"
							padding="25px 10px 10px 10px"
							bg={userInputValueLength ? "login.errorInputBg" : "login.input"}
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
							pointerEvents="none"
							w="auto"
							h="auto"
							fontSize={passwordInputClick ? "0.6rem" : "0.75rem"}
							fontWeight={passwordInputClick ? "500" : "700"}
							fontFamily="tertiary"
							m={passwordInputClick ? "5px" : "18px"}
							ml={passwordInputClick ? "11px" : "18px"}
							transition="all 0.2s ease"
							children={<Text>SENHA</Text>}
						/>
						<Input
							ref={passwordInput}
							type={show ? "text" : "password"}
							w="100%"
							border={`2px solid ${theme.colors.login.input}`}
							borderColor="none"
							borderRadius="5px"
							fontWeight="700"
							color="login.black"
							padding="25px 10px 10px 10px"
							bg="login.input"
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
							borderRadius="5px"
							bg="login.buttonFacebook"
							_hover={{ bg: "login.buttonFacebookHover" }}
							border={`2px solid ${theme.colors.login.bgForm}`}
							onClick={() =>
								toast({
									position: "bottom",
									duration: 2000,
									render: () => (
										<Flex
											color="white"
											p="10px"
											bg="red.500"
											h="80px"
											w={["100%", "500px"]}
											borderRadius="5px"
											alignItems="center"
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
							borderRadius="5px"
							bg="login.white"
							_hover={{ bg: "login.buttonGoogleHover" }}
							border={`2px solid ${theme.colors.login.inputHover}`}
							onClick={() =>
								toast({
									position: "bottom",
									duration: 2000,
									render: () => (
										<Flex
											color="white"
											p="10px"
											bg="red.500"
											h="80px"
											w={["100%", "500px"]}
											borderRadius="5px"
											alignItems="center"
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
							borderRadius="5px"
							bg="login.black"
							_hover={{ bg: "login.buttonAppleHover" }}
							border={`2px solid ${theme.colors.login.bgForm}`}
							onClick={() =>
								toast({
									position: "bottom",
									duration: 2000,
									render: () => (
										<Flex
											color="white"
											p="10px"
											bg="red.500"
											h="80px"
											w={["100%", "500px"]}
											borderRadius="5px"
											alignItems="center"
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
						w="100%"
						flexDir="row"
						alignContent="flex-start"
						alignItems="flex-end"
						position="relative"
					>
						{checkboxInputClick && (
							<Box
								display="block"
								position="absolute"
								width="6px"
								height="10px"
								border="2px solid white"
								borderLeft="none"
								borderTop="none"
								m="2.5px 0 0 5px"
								transform="rotate(45deg)"
								zIndex="1"
								bottom="7px"
								left="2px"
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
							borderRadius="5px"
							bg={checkboxInputClick ? "login.buttonSubmit" : "login.input"}
							border="none"
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
							borderRadius="25px"
							// type="submit"
							bg="login.buttonSubmit"
							border={`2px solid ${theme.colors.login.buttonSubmit}`}
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
							w="75px"
							h="75px"
							borderRadius="25px"
							type="submit"
							bg="login.bgForm"
							border={`2px solid ${theme.colors.login.version}`}
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
									fontWeight="700"
									href="#"
									_hover={{ textDecor: "none", color: "login.black" }}
									onClick={handleSignIn}
								>
									NÃO CONSEGUE INICIAR SESSÃO?
								</Link>
							</Box>
							<Box>
								<Link
									fontWeight="700"
									href="#"
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
