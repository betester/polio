import {
  HStack,
  Link,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { SecondaryButton } from "../Button";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();

  return (
    <>
      {!isLargerThan800 ? (
        <SecondaryButton float={"right"} callback={onOpen}>
          {" "}
          <HamburgerIcon />{" "}
        </SecondaryButton>
      ) : (
        <HStack gap={"0.6em"} mb="2em" float={"right"} fontSize={"1.1rem"}>
          <NextLink href={"/"}>
            <Link style={{ textDecoration: "none" }}>
              <Text
                _hover={{ color: "secondary.900" }}
                color={router.pathname === "/" && "secondary.900"}
              >
                {" "}
                Home
              </Text>
            </Link>
          </NextLink>
          <NextLink href={"/projects"}>
            <Link style={{ textDecoration: "none" }}>
              <Text
                _hover={{ color: "secondary.900" }}
                color={router.pathname === "/projects" && "secondary.900"}
              >
                Projects
              </Text>
            </Link>
          </NextLink>
          <NextLink href={"/experiences"}>
            <Link style={{ textDecoration: "none" }}>
              <Text
                _hover={{ color: "secondary.900" }}
                color={router.pathname === "/experiences" && "secondary.900"}
              >
                Experience
              </Text>
            </Link>
          </NextLink>
          <NextLink href={"/contact"}>
            <Link style={{ textDecoration: "none" }}>
              <Text
                _hover={{ color: "secondary.900" }}
                color={router.pathname === "/contact" && "secondary.900"}
              >
                Contact
              </Text>
            </Link>
          </NextLink>
        </HStack>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"primary.900"} color="white">
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack gap="0.4em">
              <NextLink href={"/"}>
                <Link onClick={onClose} style={{ textDecoration: "none" }}>
                  <Text
                    _hover={{ color: "secondary.900" }}
                    color={router.pathname === "/" && "secondary.900"}
                    fontSize={"xl"}
                  >
                    {" "}
                    Home
                  </Text>
                </Link>
              </NextLink>
              <NextLink href={"/projects"}>
                <Link onClick={onClose} style={{ textDecoration: "none" }}>
                  <Text
                    _hover={{ color: "secondary.900" }}
                    color={router.pathname === "/projects" && "secondary.900"}
                    fontSize={"xl"}
                  >
                    Projects
                  </Text>
                </Link>
              </NextLink>
              <NextLink href={"/experiences"}>
                <Link onClick={onClose} style={{ textDecoration: "none" }}>
                  <Text
                    _hover={{ color: "secondary.900" }}
                    color={
                      router.pathname === "/experiences" && "secondary.900"
                    }
                  >
                    Experience
                  </Text>
                </Link>
              </NextLink>
              <NextLink href={"/contact"}>
                <Link onClick={onClose} style={{ textDecoration: "none" }}>
                  <Text
                    _hover={{ color: "secondary.900" }}
                    color={router.pathname === "/contact" && "secondary.900"}
                    fontSize={"xl"}
                  >
                    Contact
                  </Text>
                </Link>
              </NextLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
