import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
	Box,
	HStack,
	Image,
} from "@chakra-ui/react";
import { theme } from "../../../styles/theme";
import { LoginInfoModal } from "../InfoModal/LoginInfoModal";
import { LoginUserModal } from "../UserModal/LoginUserModal";
import BgDrawerPng from "../../../assets/img/bgDrawer.png";

export const SlideDrawerMobile = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box
				position="fixed"
				w="25px"
				h="60px"
				top="50px"
				left="0"
				m="0"
				bg="transparent"
				onClick={onOpen}
			>
				<Box
					w="5px"
					h="60px"
					bg="login.buttonSubmitActive"
					borderBottomRightRadius="10px"
					borderTopRightRadius="10px"
				/>
			</Box>
			<Drawer
				placement="left"
				isOpen={isOpen}
				onClose={onClose}
				onEsc={onClose}
			>
				<DrawerOverlay />
				<DrawerContent
					h="80px"
					maxW="50%"
					mt="40px"
					bg="white"
					border={`2px solid ${theme.colors.login.userModalBgHover}`}
					borderLeft="none"
					borderBottomRightRadius="10px"
					borderTopRightRadius="10px"
					shadow={`rgba(0, 0, 0, 0.76) 0px 22px 70px 4px`}
					zIndex="1"
				>
					<Box position="absolute" w="100%" h="100%" overflow="hidden">
						<Image
							src={BgDrawerPng}
							w="100%"
							h="100%"
							objectFit="cover"
							opacity="0.2"
						/>
					</Box>
					<HStack position="relative" pr="30px">
						<Box position="absolute" left={["-10%", "5%"]} mt="30px">
							<LoginInfoModal />
						</Box>
						<Box position="absolute" top="-30px" left={["50%", "60%"]}>
							<LoginUserModal />
						</Box>
					</HStack>
				</DrawerContent>
			</Drawer>
		</>
	);
};
