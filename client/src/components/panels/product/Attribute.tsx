import { Box, FormControlLabel, FormGroup, Switch, TextField } from "@mui/material";
import { IAttribute } from "./IAttribute";

export default function Attribute({ attribute }: { attribute: IAttribute }) {
    return (
        <Box component="div" sx={{ display: "flex", "& > :not(style)": { mr: 1, my: 1 } }}>
            <TextField size="small" id="english_slug" label="english_slug" variant="outlined" />
            <TextField size="small" id="persian_title" label="persian_title" variant="outlined" />
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Filterable" labelPlacement="start" />
            </FormGroup>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Priceable" labelPlacement="start" />
            </FormGroup>
        </Box>
    );
}
