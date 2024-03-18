import { Box, Divider, Paper, Typography } from "@mui/material";

export default function Content({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <Paper elevation={0} sx={{ p: 2 }}>
            <Typography variant="h6">{title}</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box component="div">{children}</Box>
        </Paper>
    );
}
