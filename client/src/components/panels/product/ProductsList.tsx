import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Skeleton } from "@mui/material";
import Content from "../../Content";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function ProductsList() {
    return (
        <Content title="Products">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
                            <Skeleton variant="rectangular" height={10} />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
                            <Skeleton variant="rectangular" height={10} />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
                            <Skeleton variant="rectangular" height={10} />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Content>
    );
}
