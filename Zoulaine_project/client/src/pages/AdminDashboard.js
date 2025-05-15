import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Box,
} from "@mui/material";
import axios from "axios";

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/products");
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch products", error);
            setLoading(false);
        }
    };

    const handleOpenDialog = (product = null) => {
        setSelectedProduct(product);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setSelectedProduct(null);
        setOpenDialog(false);
    };

    const handleSaveProduct = async () => {
        try {
            if (selectedProduct._id) {
                await axios.put(
                    `http://localhost:4000/api/products/${selectedProduct._id}`,
                    selectedProduct
                );
            } else {
                await axios.post("http://localhost:4000/api/products", selectedProduct);
            }
            fetchProducts();
            handleCloseDialog();
        } catch (error) {
            console.error("Failed to save product", error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error("Failed to delete product", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedProduct({ ...selectedProduct, [name]: value });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <Typography variant="h5">Loading...</Typography>;
    }

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpenDialog()}
                style={{ marginBottom: "20px" }}
            >
                Add New Product
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product._id}>
                                <TableCell>{product._id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.marque}</TableCell>
                                <TableCell>{product.prix} €</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleOpenDialog(product)}
                                        style={{ marginRight: "10px" }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => handleDeleteProduct(product._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{selectedProduct?._id ? "Edit Product" : "Add Product"}</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        name="name"
                        value={selectedProduct?.name || ""}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Image Path"
                        name="imgPath"
                        value={selectedProduct?.imgPath || ""}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Brand"
                        name="marque"
                        value={selectedProduct?.marque || ""}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Price"
                        name="prix"
                        type="number"
                        value={selectedProduct?.prix || ""}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveProduct} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AdminDashboard;
