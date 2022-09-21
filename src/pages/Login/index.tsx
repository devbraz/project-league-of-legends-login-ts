import { Box } from "@chakra-ui/react";
import { LoginForm } from "../../components/LoginForm";
import { LoginVideo } from "../../components/LoginVideo";

export const Login = () => {
	return (
		<Box w="100vw" h="100vh">
			<LoginForm />
			<LoginVideo />
		</Box>
	);
};
