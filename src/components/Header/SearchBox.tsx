import { useRef, useState } from "react";
import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
	const [searchText, setSearchText] = useState('')
	const searchInputRef = useRef<HTMLInputElement>(null)

	return (
		<Flex
			as="label"
			flex="1"
			py="4"
			px="8"
			ml="6"
			maxW={400}
			alignSelf="center"
			color="gray.200"
			bg="gray.800"
			position="relative"
			borderRadius="full"
		>
			<Input
				ref={searchInputRef}
				color="gray.50"
				variant="unstyled"
				px="4"
				mr="4"
				placeholder="Buscar na plataforma"
				_placeholder={{ color: 'gray.400' }}
				value={searchText}
				onChange={(event) => setSearchText(event.target.value)}
			/>
			<Icon
				as={RiSearchLine}
				fontSize="20"
			/>
		</Flex>
	)
}