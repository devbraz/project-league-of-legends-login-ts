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
				top="50px"
				left="0"
				m="0"
				w="25px"
				h="60px"
				onClick={onOpen}
				bg="transparent"
			>
				<Box
					borderBottomRightRadius="10px"
					borderTopRightRadius="10px"
					w="5px"
					h="60px"
					bg="login.buttonSubmitActive"
				/>
			</Box>
			<Drawer
				isOpen={isOpen}
				onClose={onClose}
				placement="left"
				onEsc={onClose}
			>
				<DrawerOverlay />
				<DrawerContent
					maxW="50%"
					h="80px"
					mt="40px"
					bg="white"
					borderBottomRightRadius="10px"
					borderTopRightRadius="10px"
					border={`2px solid ${theme.colors.login.userModalBgHover}`}
					borderLeft="none"
					shadow={`rgba(0, 0, 0, 0.76) 0px 22px 70px 4px`}
					zIndex="1"
				>
					<Box position="absolute">
						<Image
							src={BgDrawerPng}
							objectFit="cover"
							w="100%"
							h="100%"
							opacity="0.2"
						/>
					</Box>
					<HStack position="relative" pr="30px">
						<Box position="absolute" mt="30px" left={["-10%", "5%"]}>
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
