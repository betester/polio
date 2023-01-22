import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [display, setDisplay] = useState("hidden");
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.asPath === "" ? setDisplay("hidden") : setDisplay("block");
    }
  }, [router]);

  return (
    <Box p="2em 0" borderTop={"1px solid white"} display={""}>
      <Text textAlign={"center"}>Made by betester in {2022}</Text>
    </Box>
  );
};
