import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {

	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Pedro César</Text>
					<Text color="gray.300" fontSize="small">
						pedrocs378@gmail.com
					</Text>
				</Box>
			)}

			<Avatar
				size="md"
				name="Pedro César"
				src="https://github.com/pedrocs378.png"
			/>
		</Flex>
	)
}