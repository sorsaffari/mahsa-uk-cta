import {PageLayout} from "../../lib/components/page-layout/page-layout";
import { Title, Text } from '@mantine/core';;

export const AlmostDone = () => {
	return (
		<PageLayout
			title="Almost done"
			prevPath="/"
		>
			<br/>
			<Title order={1} align="center">Thank you!</Title>
			<br/>
			<Text align="center">Thank you for standing with us in our path to support human rights and achieve secular democracy in Iran.</Text>
		</PageLayout>
	)
}
