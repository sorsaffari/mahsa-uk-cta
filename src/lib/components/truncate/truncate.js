import {IconChevronDown, IconAlignLeft} from "@tabler/icons";
import {StyledTurncate} from "./truncate.style";

export const truncate = (props) => {


	return (
		<StyledTurncate isOpen={props.isOpen}>
			<div className="truncate-header">
				<div>
					<div>
						<i><IconAlignLeft /></i>
					</div>
					<div>
						<h3>{props.title}</h3>
						<span>{props.description}</span>
					</div>
				</div>
				<div><IconChevronDown /></div>
			</div>
			<div className="truncate-body">
				{props.children}
			</div>
		</StyledTurncate>
	)
}