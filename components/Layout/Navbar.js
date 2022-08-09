import { HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <HStack gap={"1em"} mb="2em" float={"right"} fontSize={"1.3rem"}>
      <NextLink href={"/"}>
        <Link>
          <Text> Home</Text>
        </Link>
      </NextLink>
      <NextLink href={"/projects"}>
        <Link>
          <Text>Projects</Text>
        </Link>
      </NextLink>
      <NextLink href={"/"}>
        <Link>
          <Text>Experiences</Text>
        </Link>
      </NextLink>
      <NextLink href={"/"}>
        <Link>
          <Text>Contact</Text>
        </Link>
      </NextLink>
    </HStack>
  );
};
