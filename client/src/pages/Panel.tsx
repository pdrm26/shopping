import { Container, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Theme from "../theme/Theme";
import { Outlet } from "react-router-dom";

export default function Panel() {
    return (
        <Theme>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item md={3} sx={{ mt: "20px" }}>
                        <Sidebar />
                    </Grid>
                    <Grid item md={9} sx={{ mt: "20px" }}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Container>
        </Theme>
    );
}
