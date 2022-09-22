import { Box, Flex } from "@chakra-ui/react";
import { LoginForm } from "../../components/LoginForm";
import { LoginVideo } from "../../components/LoginVideo";

export const Login = () => {
	return (
		<Flex w="100vw" h="100vh" flexDir="row">
			<LoginForm />
			<LoginVideo />
		</Flex>
	);
};
