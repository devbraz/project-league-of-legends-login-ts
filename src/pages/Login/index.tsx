import { Box } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { LoginVideo } from "./LoginVideo";

export const Login = () => {
	return (
		<Box>
			<LoginForm />
			<LoginVideo />
		</Box>
	);
};
