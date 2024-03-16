import { Container, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Theme from "../theme/Theme";

export default function Panel() {
    return (
        <Theme>
            <Container maxWidth="xl" sx={{ mt: "20px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={2} lg={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10} lg={9}>
                        <Dashboard />
                    </Grid>
                </Grid>
            </Container>
        </Theme>
    );
}
