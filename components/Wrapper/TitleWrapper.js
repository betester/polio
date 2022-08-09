import { Box } from "@chakra-ui/react"

export const TitleWrapper = ({children}) => {
    return <Box borderLeft={"1em white solid"} alignItems="center" pl="0.6em">{children}</Box>
}