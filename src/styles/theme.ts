// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		login: {
			backgroundImg: "#4d4d4d",
			bgForm: "#f2f2f2",
			black: "#000000",
			buttonSubmit: "#ba3636",
			buttonSubmitHover: "#992C2C",
			buttonSubmitActive: "#7A2323",
			buttonAppleHover: "hsl(0, 0%, 5%)",
			buttonFacebook: "#1a66ff",
			buttonFacebookHover: "hsl(220, 100%, 52%)",
			buttonGoogleHover: "hsl(0, 0%, 97%)",
			infoModal: "#cb4dcb",
			errorInputBg: "#FFE9FF",
			errorInputBorder: "#FFAAFF",
			infoModalHover: "hsl(300, 55%, 45%)",
			input: "#e6e6e6",
			inputHover: "hsl(0, 0%, 89%)",
			inputText: "hsl(0, 0%, 65%)",
			modalBg: "#595959",
			userModalBg: "hsl(0, 0%, 10%)",
			userModalBgHover: "hsl(0, 0%, 15%)",
			version: "hsl(0, 0%, 79%)",
			white: "#FFFFFF",
		},
	},
	fonts: {
		primary: "'Open Sans', sans-serif",
		secondary: "'Albert Sans', sans-serif",
		tertiary: "Lexend Deca', sans-serif",
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "8rem",
	},
	styles: {
		global: {
			body: {
				bg: "login.bgForm",
				color: "login.inputText",
			},
		},
	},
});
