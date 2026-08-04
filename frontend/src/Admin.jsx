import { useState, useEffect } from "react";
import axios from "axios";
import {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "./services/productService";

function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    imageUrl: "",
    brand: "",
  });

  const [products, setProducts] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [image, setImage] = useState(null);

  // Load all products
  const loadProducts = () => {
    getAllProducts()
      .then((data) => {
        console.log("Admin Products:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Load products when page opens
  useEffect(() => {
    loadProducts();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     if (editingId) {

    await updateProduct(editingId, formData);

    alert("Product Updated Successfully!");

    setEditingId(null);

} else {

    let uploadedFileName = "";

if (image) {

    const imageData = new FormData();

    imageData.append("file", image);

    const uploadResponse = await axios.post(
        "http://localhost:8080/files/upload",
        imageData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    uploadedFileName = uploadResponse.data;
}
formData.imageUrl = uploadedFileName;
    await axios.post(
        "http://localhost:8080/products",
        formData
    );

    alert("Product Added Successfully!");

}

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        imageUrl: "",
        brand: "",
      });

      setEditingId(null);

loadProducts();

      loadProducts();
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  const handleEdit = async (id) => {

    try {

        const product = await getProductById(id);

        setFormData({
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            stock: product.stock,
            imageUrl: product.imageUrl,
            brand: product.brand
        });

        setEditingId(id);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } catch (error) {

        console.error(error);

        alert("Unable to load product");

    }

};

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {

        await deleteProduct(id);

        alert("Product Deleted Successfully!");

        loadProducts();

    } catch (error) {

        console.error(error);

        alert("Failed to delete product");

    }

};

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        boxShadow: "0 5px 20px rgba(0,0,0,.1)",
        borderRadius: "12px",
        background: "white",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px" }}
        />

        <br />
        <br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px" }}
        />

        <br />
        <br />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px" }}
        />

        <br />
        <br />

        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px" }}
        />

        <br />
        <br />

        <input
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px" }}
        />

        <br />
        <br />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px" }}
        />

        <br />
        <br />

        <input
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
/>

        <br />
        <br />

        <button type="submit">
    {editingId ? "Update Product" : "Add Product"}
</button>
      </form>

      <hr style={{ margin: "40px 0" }} />

      <h2>All Products</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>₹{product.price}</td>
              <td>{product.stock}</td>

              <td>
  <button
    onClick={() => handleEdit(product.id)}
    style={{
      background: "#007bff",
      color: "white",
      border: "none",
      padding: "8px 14px",
      borderRadius: "6px",
      cursor: "pointer",
      marginRight: "8px",
    }}
  >
    Edit
  </button>

  <button
    onClick={() => handleDelete(product.id)}
    style={{
      background: "red",
      color: "white",
      border: "none",
      padding: "8px 14px",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;