import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { LoginForm } from "../../components/LoginForm";
import { LoginVideo } from "../../components/LoginVideo";

export const Login = () => {
	const isWideVersion = useBreakpointValue({
		base: false,
		md: true,
	});

	return (
		<Flex w="100%" h="100%" flexDir="row">
			<LoginForm />
			{isWideVersion && <LoginVideo />}
		</Flex>
	);
};
