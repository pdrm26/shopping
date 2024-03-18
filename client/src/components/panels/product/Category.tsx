import { Box, Divider, Typography } from "@mui/material";

export default function Category() {
    return (
        <Box component="div">
            <Typography variant="h6"></Typography>
            <Divider sx={{ mb: 2 }} />
            <Box component="div"></Box>
        </Box>
    );
}
