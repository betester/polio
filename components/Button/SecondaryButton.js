import { Button, forwardRef } from "@chakra-ui/react";

export const SecondaryButton = forwardRef(
  ({ callback, active = false, children, ...props }, ref) => (
    <Button
      ref={ref}
      onClick={callback}
      mt="2em"
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
