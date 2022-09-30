import styled from 'styled-components';

export const YourMessageContainer = styled.section`
<<<<<<< HEAD
  position: relative;
  width: 100%;
  height: 100%;
  textarea {
    border: none;
    border-radius: none;
    width: 100%;
    height: calc(100% - 2rem);
    resize: none;
    padding: 1rem;
    font-family: 'Poppins', sans-serif;
  }
  .your-message__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    button {
      height: 2rem !important;
    }
  }
  .mantine-Modal-title {
    font-size: 1.4rem;
  }
`;
=======
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: stretch;
	position: relative;
	width: 100%;
	height: 100%;
	textarea{
		border: none;
		border-radius: none;
		width: 100%;
		flex-grow: 1;
		flex-shrink: 0;
		resize: none;
		font-family: 'Poppins', sans-serif;
	}
	.your-message__buttons{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		align-content: center;	
		width: 100%;
		padding: 0.5rem 0 0 0;
		box-sizing: border-box;
		flex-basis: 2.5rem;
		flex-shrink: 0;
		button{
			height: 2rem !important;
		}
	}
	.mantine-Modal-title{
		font-size: 1.4rem;
	}
`
>>>>>>> 0a3b5b99473365d27c2ba41b8d6151305c668b11
