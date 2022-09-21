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
import { useState } from "react";
import riotlogo from "../../assets/img/riotgameslogo.png";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiOutlineArrowRight } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { LoginVersionModal } from "../Modal/LoginVersionModal";

export const LoginForm = () => {
	const [inputNameFocus, setInputNameFocus] = useState(false);
	const [inputPasswordFocus, setInputPasswordFocus] = useState(false);
	const [inputName, setInputName] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [inputType, setInputType] = useState("password");
	const [buttonPasswordFocus, setButtonPasswordFocus] = useState(false);
	const handleFocusEnd = () => {
		if (inputName === "") {
			setInputNameFocus(false);
		}
		if (inputPassword === "") {
			setInputPasswordFocus(false);
		}
	};
	const handleClick = () => {
		if (inputType === "password") {
			return setInputType("text");
		}
		return setInputType("password");
	};
	return (
		<Flex
			justifyContent="flex-start"
			flexDir="column"
			alignItems="center"
			textAlign="center"
			w="25%"
			h="100vh"
		>
			<VStack>
				<Image src={riotlogo} alt="Riot Logo" />
				<Text fontSize="3xl" fontWeight="bold" fontFamily="tertiary">
					Fazer login
				</Text>
				<Box>
					{inputNameFocus ? (
						<FormLabel>
							<Text>NOME DE USUÁRIO</Text>
							<Input
								value={inputName}
								defaultValue=""
								onChange={(event) => setInputName(event.target.value)}
								onBlur={handleFocusEnd}
								type="text"
							/>
						</FormLabel>
					) : (
						<FormLabel>
							<Text>NOME DE USUÁRIO</Text>
							<Input
								defaultValue=""
								onFocus={() => setInputNameFocus(true)}
								type="text"
							/>
						</FormLabel>
					)}
					{inputPasswordFocus ? (
						<FormLabel>
							<Text>SENHA</Text>
							<Input
								value={inputPassword}
								defaultValue=""
								onChange={(e) => setInputPassword(e.target.value)}
								onBlur={() => {
									handleFocusEnd();
								}}
								type={inputType}
							/>
							{buttonPasswordFocus && (
								<Button onClick={() => handleClick()}>
									{inputType === "password" ? <IoIosEyeOff /> : <IoIosEye />}
								</Button>
							)}
						</FormLabel>
					) : (
						<FormLabel>
							<Text>SENHA</Text>
							<Input
								defaultValue=""
								onFocus={() => {
									setInputPasswordFocus(true);
									setButtonPasswordFocus(true);
								}}
								type={inputType}
							/>
						</FormLabel>
					)}
				</Box>
				<HStack>
					<Button>
						<RiFacebookCircleFill />
					</Button>
					<Button>
						<FcGoogle />
					</Button>
					<Button>
						<AiFillApple />
					</Button>
				</HStack>
				<Box>
					<FormLabel>
						<Input type="checkbox" />
						Manter login
					</FormLabel>
				</Box>
				<Box>
					{(inputName.length && inputPassword.length) > 1 ? (
						<Button>
							<AiOutlineArrowRight />
						</Button>
					) : (
						<Button className="disabled-button" disabled>
							<AiOutlineArrowRight />
						</Button>
					)}
					<Box>
						<Box>
							<Link href="/login">NÃO CONSEGUE INICIAR SESSÃO?</Link>
							<Link href="/login">CRIAR CONTA</Link>
						</Box>
						<LoginVersionModal />
					</Box>
				</Box>
			</VStack>
		</Flex>
	);
};
