import { Container, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Theme from "../theme/Theme";

export default function Panel() {
    return (
        <Theme>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={2} lg={3} sx={{ mt: "20px" }}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10} lg={9} sx={{ mt: "20px" }}>
                        <Dashboard />
                    </Grid>
                </Grid>
            </Container>
        </Theme>
    );
}
