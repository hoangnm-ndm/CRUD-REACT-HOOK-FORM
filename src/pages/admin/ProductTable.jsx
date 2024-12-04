import React, { useEffect, useState } from "react";
import { getAllItem } from "../../services/crud";
import { Link } from "react-router-dom";

const ProductTable = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		(async () => {
			// const res = await fetch("http://localhost:3000/products");
			// const data = await res.json();
			const data = await getAllItem("/products");
			setProducts(data);
		})();
	}, []);
	return (
		<>
			<Link to="/admin/products/add" className="btn btn-primary">
				Thêm sản phẩm mới
			</Link>
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.description || "Đang cập nhật"}</td>
							<td>
								<button className="btn btn-danger">Remove</button>
								<button className="btn btn-link">Hide</button>
								<Link className="btn btn-warning" to={`/admin/products/update/${item.id}`}>
									Update
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ProductTable;
