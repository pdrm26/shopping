import { Box, TextField } from "@mui/material";
import Content from "../../Content";

export default function EditCategory() {
    return (
        <Content title="Edit Category">
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                }}
                autoComplete="off"
            >
                <TextField size="small" id="category_label_en" label="Category English Label" variant="outlined" />
                <TextField size="small" id="category_label_fa" label="Category Persian Label" variant="outlined" />
            </Box>
        </Content>
    );
}
