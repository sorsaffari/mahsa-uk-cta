import styled, {css} from 'styled-components';

export const StyledTurncate = styled.div`
	max-height: 3rem;
	transition: max-height 0.3s;
	${props =>
		props.isOpen &&
		css`
		max-height: 100vh;
	`};
`