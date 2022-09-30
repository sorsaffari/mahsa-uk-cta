import { Button, TextInput } from "@mantine/core";
import styled from "styled-components";

export const SCContainer = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SCPostCodeLookup = styled.div`
    width: 80%;
`

export const SCTextInput = styled(TextInput)`
    margin-bottom: 1rem;
`

export const SCNextButton = styled(Button)`
    background-color: #554AF0;
`