import { Button, TextField } from "@mui/material"
import { useState } from "react";
import { PageLayout } from "../../lib/components"
import { readMp, validatePostCode } from "../../services/api";

export const PagePostCode = () => {
    const [postCode, setPostcode] = useState('');
    const [isValidatingPostCode, setIsValidatingPostCode] = useState(false);
    const [postCodeValidationError, setPostCodeValidationError] = useState('');
    const [mp, setMp] = useState();

    const handlePostCodeChange = (e) => {
        setPostcode(e.target.value);
    };

    const handlePostCodeSubmit = async () => {
        try {
            setIsValidatingPostCode(true);
            setPostCodeValidationError('');

            await validatePostCode(postCode)

            const mp = await readMp(postCode);
            setMp(mp);
        } catch {
            setPostCodeValidationError('Post code is invalid.');
        } finally {
            setIsValidatingPostCode(false);
        }
    };

    return (
        <PageLayout><div>
            <TextField
                error={!!postCodeValidationError}
                helperText={postCodeValidationError}
                label="Enter your UK post code"
                autoFocus
                variant='outlined'
                onChange={handlePostCodeChange}
            />
            <Button
                onClick={handlePostCodeSubmit}
                loading={isValidatingPostCode ? 1 : 0}
            >
                Go
            </Button>
        </div></PageLayout>)
}