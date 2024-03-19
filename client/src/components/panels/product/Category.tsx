import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { attributeTemplate, IAttribute } from "./IAttribute";
import Attribute from "./Attribute";

export default function Category({ title, attributes }: { title: string; attributes: IAttribute[] }) {
    const [attrs, setAttrs] = useState<IAttribute[]>(attributes);

    const handleAddAttributes = () => {
        setAttrs((prevAttrs) => [...prevAttrs, attributeTemplate]);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "5px",
                    mt: "20px",
                }}
            >
                <Typography variant="h6">{title}</Typography>
                <Divider sx={{ flexGrow: 1, mx: "10px", display: "inline-block" }} />
                <Button variant="outlined" sx={{ display: "inline-block" }} onClick={handleAddAttributes}>
                    Add Attribute
                </Button>
            </Box>
            <Box component="div">
                {attrs.map((attribute) => (
                    <Attribute attribute={attribute} key={attribute.englishTitle} />
                ))}
            </Box>
        </>
    );
}
