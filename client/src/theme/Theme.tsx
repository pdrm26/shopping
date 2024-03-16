import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: "#f5f5f5",
        },
    },
});

export default function Theme({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
