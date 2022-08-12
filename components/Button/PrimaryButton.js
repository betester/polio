import { Button } from "@chakra-ui/react";

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      _hover={{ bgColor: "secondary.800" }}
      bgColor="primary.800"
      p="1em"
    >
      {children}
    </Button>
  );
};
