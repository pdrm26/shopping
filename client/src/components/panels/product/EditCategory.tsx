import { Box, Button, TextField } from "@mui/material";
import Content from "../../Content";
import { useState } from "react";
import DialogButton from "../../DialogButton";
import Category from "./Category";
import SaveIcon from "@mui/icons-material/Save";
import { IAttribute } from "./IAttribute";

interface Category {
    title: string;
    attributes: IAttribute[];
}

export default function EditCategory() {
    const [categories, setCategories] = useState<Category[]>([]);

    const handleAddCategory = (categoryName: string) => {
        setCategories((prevCategories) => [...prevCategories, { title: categoryName, attributes: [] }]);
    };

    return (
        <Content title="Edit Category">
            <Box component="form" autoComplete="off">
                <Box
                    component="div"
                    sx={{
                        "& > :not(style)": { m: 1, flexGrow: 1 },
                        display: "flex",
                        background: "#f5f5f5",
                        borderRadius: 1,
                        px: 5,
                    }}
                >
                    <TextField size="small" id="category_label_en" label="Category English Label" variant="outlined" />
                    <TextField size="small" id="category_label_fa" label="Category Persian Label" variant="outlined" />
                    <DialogButton buttonText="Add Group" handleAddCategory={handleAddCategory} />
                    <Button variant="outlined" startIcon={<SaveIcon />}>
                        Save
                    </Button>
                </Box>
                <Box component="div">
                    {categories.map((category) => (
                        <Category title={category.title} attributes={category.attributes} key={category.title} />
                    ))}
                </Box>
            </Box>
        </Content>
    );
}
