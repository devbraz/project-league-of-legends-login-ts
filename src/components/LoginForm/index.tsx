import {
	VStack,
	Image,
	Box,
	Text,
	Flex,
	FormLabel,
	Input,
	Button,
	HStack,
	Link,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import riotlogo from "../../assets/img/riotgameslogo.png";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiOutlineArrowRight } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { LoginVersionModal } from "../Modal/LoginVersionModal";
import { theme } from "../../styles/theme";

export const LoginForm = () => {
	const userInput = useRef<any>();
	const passwordInput = useRef<any>();
	const [userInputClick, setUserInputClick] = useState(false);
	const [passwordInputClick, setPasswordInputClick] = useState(false);
	const [checkboxInputClick, setCheckboxInputClick] = useState(false);
	return (
		<Flex w="25vw" h="100vh" justifyContent="center">
			<VStack w="75%" justifyContent="space-evenly" flexDir="column">
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
					<Box w="100%" position="relative">
						<Text
							w="auto"
							h="auto"
							position="absolute"
							fontSize={userInputClick ? "0.6rem" : "0.75rem"}
							fontWeight={userInputClick ? "500" : "700"}
							fontFamily="tertiary"
							m={userInputClick ? "5px" : "18px"}
							ml={userInputClick ? "11px" : "18px"}
							transition="all 0.2s ease"
							zIndex="1"
						>
							NOME DE USUÁRIO
						</Text>
						<Input
							ref={userInput}
							defaultValue=""
							type="text"
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
							_focusVisible={{ boder: "none" }}
							_focus={{
								outline: "none",
								bg: "login.white",
								border: `2px solid ${theme.colors.login.buttonAppleHover}`,
							}}
							_hover={{
								borderColor: "none",
								bg: "login.inputHover",
							}}
							onBlur={() => {
								userInput.current.value.length > 0
									? setUserInputClick(true)
									: setUserInputClick(false);
							}}
							onFocus={() => setUserInputClick(true)}
						/>
					</Box>
					<Box w="100%" position="relative">
						<Text
							w="auto"
							h="auto"
							position="absolute"
							fontSize={passwordInputClick ? "0.6rem" : "0.75rem"}
							fontWeight={passwordInputClick ? "500" : "700"}
							fontFamily="tertiary"
							m={passwordInputClick ? "5px" : "18px"}
							ml={passwordInputClick ? "11px" : "18px"}
							transition="all 0.2s ease"
							zIndex="1"
						>
							SENHA
						</Text>
						<Input
							ref={passwordInput}
							defaultValue=""
							type="password"
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
							_focusVisible={{ boder: "none" }}
							_focus={{
								outline: "none",
								bg: "login.white",
								border: `2px solid ${theme.colors.login.buttonAppleHover}`,
							}}
							_hover={{
								borderColor: "none",
								bg: "login.inputHover",
							}}
							onBlur={() => {
								passwordInput.current.value.length > 0
									? setPasswordInputClick(true)
									: setPasswordInputClick(false);
							}}
							onFocus={() => setPasswordInputClick(true)}
						/>
					</Box>
					<HStack w="100%" justifyContent="space-between">
						<Button
							w="30%"
							h="40px"
							borderRadius="5px"
							bg="login.buttonFacebook"
							_hover={{ bg: "login.buttonFacebookHover" }}
							border={`2px solid ${theme.colors.login.bgForm}`}
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
							bg={checkboxInputClick ? "login.buttonActive" : "login.input"}
							border="none"
							onClick={() => {
								checkboxInputClick
									? setCheckboxInputClick(false)
									: setCheckboxInputClick(true);
							}}
							checked={checkboxInputClick}
						/>
						<Text ml="10px">Manter login</Text>
					</Flex>
				</VStack>

				<Box textAlign="center">
					<Button>
						<AiOutlineArrowRight />
					</Button>

					<Box>
						<Flex flexDir="column">
							<Link href="#">NÃO CONSEGUE INICIAR SESSÃO?</Link>
							<Link href="#">CRIAR CONTA</Link>
						</Flex>

						<LoginVersionModal />
					</Box>
				</Box>
			</VStack>
		</Flex>
	);
};
