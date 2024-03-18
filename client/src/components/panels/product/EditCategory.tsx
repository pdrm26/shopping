import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Content from "../../Content";
import { useState } from "react";
import DialogButton from "../../DialogButton";
import Category from "./Category";

interface Category {
    title: string;
    attributes: [];
}

export default function EditCategory() {
    const [categories, setCategories] = useState<Category[]>([]);

    const handleAddCategory = (categoryName: string) => {
        setCategories((prevCategories) => [...prevCategories, { title: categoryName, attributes: [] }]);
    };

    return (
        <Content title="Edit Category">
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1 },
                }}
                autoComplete="off"
            >
                <TextField
                    size="small"
                    id="category_label_en"
                    label="Category English Label"
                    variant="outlined"
                    sx={{ minWidth: "400px" }}
                />
                <TextField
                    size="small"
                    id="category_label_fa"
                    label="Category Persian Label"
                    variant="outlined"
                    sx={{ minWidth: "400px" }}
                />
                <DialogButton buttonText="Add Group" handleAddCategory={handleAddCategory} />
                <Box component="div">
                    {categories.map((category) => (
                        <Category title={category.title} attributes={category.attributes} />
                    ))}
                </Box>
            </Box>
        </Content>
    );
}
