import {useState } from "react";
import { Button, Modal, Alert } from "@mantine/core";
import { IconAlignLeft, IconAlertCircle } from "@tabler/icons";
import { Truncate } from "../../lib/components/truncate/truncate";


export const Templates = () => {

	const [isOpen, setIsOpen] = useState(false);
	return (
		<>		
		<Button 
			leftIcon={<IconAlignLeft />} 
			variant="outline" 
			color="gray" 
			radius="md" 
			size="xs" 
			onClick={() => setIsOpen(true)}
			compact uppercase>
			Templates
		</Button>
		
		<Modal 
			opened={isOpen} 
			onClose={() => setIsOpen(false)}
			title="Templates"
			centered>
			<Alert icon={<IconAlertCircle size={16} />} color="violet" radius="md" variant="outline">
				Use your own words; we block copied-and-pasted identical messages.
			</Alert>
			<br/>
			<Truncate title="salam" description="hey">
				salam
			</Truncate>
			<Button variant="light" color="violet" radius="md" size="md" onClick={() => setIsOpen(false)} fullWidth>
				Got it!
			</Button>
		</Modal>
		</>
	)
}
