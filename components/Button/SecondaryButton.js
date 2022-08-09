import { Button } from "@chakra-ui/react";
export const SecondaryButton = ({
  callback,
  active = false,
  children,
  ...props
}) => {
  return (
    <Button
      onClick={callback}
      mt="2em"
      bgColor={active ? "secondary.900" : "inherit"}
      border="1px solid"
      color={active && "black"}
      borderColor={"secondary.900"}
      _hover={{ bgColor: "secondary.900", color: "black" }}
      {...props}
    >
      {children}
    </Button>
  );
};
