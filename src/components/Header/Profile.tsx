import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {

	return (
		<Flex align="center">
			<Box mr="4" textAlign="right">
				<Text>Pedro César</Text>
				<Text color="gray.300" fontSize="small">
					pedrocs378@gmail.com
				</Text>
			</Box>

			<Avatar
				size="md"
				name="Pedro César"
				src="https://github.com/pedrocs378.png"
			/>
		</Flex>
	)
}