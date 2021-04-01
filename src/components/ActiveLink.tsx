import { cloneElement, ReactElement, useMemo } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/dist/client/router";

interface ActiveLinkProps extends LinkProps {
	children: ReactElement
	shouldMatchExactHref?: boolean
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
	const { asPath } = useRouter()

	const isActive = useMemo(() => {
		if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
			return true
		}

		if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
			return true
		}

		return false
	}, [shouldMatchExactHref, asPath, rest.href, rest.as])

	return (
		<Link {...rest}>
			{cloneElement(children, {
				color: isActive ? 'pink.400' : 'gray.50'
			})}
		</Link>
	)
}