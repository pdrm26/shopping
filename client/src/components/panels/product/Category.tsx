import { Box, Button, Divider, Typography } from "@mui/material";

export default function Category({ title, attributes }: { title: string; attributes: [] }) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "20px",
                }}
            >
                <Typography variant="h6">{title}</Typography>
                <Divider sx={{ flexGrow: 1, mx: "10px", display: "inline-block" }} />
                <Button variant="outlined" sx={{ display: "inline-block" }}>
                    Outlined
                </Button>
            </Box>
            <Box component="div">{attributes}</Box>
        </>
    );
}
