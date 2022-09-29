import { ReactNode } from "react";

import { theme } from "../styles/theme";

import { ChakraProvider } from "@chakra-ui/react";

interface ProviderInterface {
	children: ReactNode;
}

export const AppProvider = ({ children }: ProviderInterface) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
