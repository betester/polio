import { Button, forwardRef, Link } from "@chakra-ui/react";

export const SecondaryButton = forwardRef(
  ({ href, callback, active = false, isExternal=false, children, ...props }, ref) => (
    <Button
      ref={ref}
      as={href ? Link: "button"}
      isExternal={isExternal}
      onClick={callback}
      mt="2em"
      href={href}
      bgColor={active ? "secondary.900" : "inherit"}
      border="1px solid"
      color={active && "black"}
      borderColor={"secondary.900"}
      _active={{ bgColor: "secondary.900", color: "black" }}
      _hover={{ bgColor: "secondary.900", color: "black" }}
      {...props}
    >
      {children}
    </Button>
  )
);
