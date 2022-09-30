import styled, {css} from 'styled-components';

export const StyledTurncate = styled.div`
	max-height: 3.5rem;	
	transition: max-height 0.5s;
	margin-bottom: 0.75rem;
	overflow: hidden;
	.truncate__header{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		align-content: stretch;
		height: 3.5rem;
		cursor: pointer;	
		&__left{
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			align-content: stretch;
			&__icon{
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: center;
				align-items: center;
				align-content: center;
				border-radius: 0.8rem;
				background: #F8F8FA;
				width: 3.3rem;
				height: 3.3rem;
				margin-right: 1rem;
				i{
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: center;
					align-items: center;
					align-content: center;
					width: 1.2rem;
					height: 1.2rem;
					border-radius: 0.3rem;				
					background: #554AF044;
					color: #554AF0;
				}
			}
			&__title{
				h6{
					margin: 0;
					font-size: 0.9rem;
					font-weight: 500;
					color: #04021D;
				}		
				span{
					font-size: 0.8rem;
					color: #686777;
				}
			}
		}
		&__right{
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
			align-content: center;
			width: 2.5rem;
			height: 2.5rem;
			i{
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: center;
				align-items: center;
				align-content: center;
				color: #777;
				cursor: pointer;
			}
		}
	}
	.truncate__body{
		padding: 0.5rem;
	}
	${props =>
		props.isOpen &&
		css`
		max-height: 100vh !important;
	`};
`