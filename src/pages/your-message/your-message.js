import {useState } from "react";
import { PageLayout } from "../../lib/components/page-layout/page-layout";
import { YourMessageContainer } from "./your-message.style";
import { Instructions } from "./instructions";
import { Templates } from "./templates";


export const YourMessage = () => {

	const [value, setValue ] = useState("");

	return (
		<PageLayout title="Your Message">
			<YourMessageContainer>
				<textarea 
					onChange={e => {setValue(e.target.value)}} placeholder="Stat here...">
				</textarea>
				
				<div className="your-message__buttons">
					<Templates />
					<Instructions />
				</div>
			</YourMessageContainer>
		</PageLayout>
	)
}
