import axios from "axios";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader";
import ProductDeleteButton from "../../components/productDeleteButton";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/products")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
          setLoaded(true);
        });
    }
  }, [loaded]);

  return (
    <div className="w-full min-h-screen flex justify-center bg-primary/20 p-10 relative">
      {loaded ? (
        <table
          className="w-full rounded-2xl bg-white shadow-xl border border-gray-200 table-auto"
        >
          <thead className="bg-accent text-white text-sm">
            <tr className="h-[65px]">
              <th className="px-2">Image</th>
              <th className="px-2">Product ID</th>
              <th className="px-2">Name</th>
              <th className="px-2">Price</th>
              <th className="px-2">Labelled</th>
              <th className="px-2">Category</th>
              <th className="px-2">Brand</th>
              <th className="px-2">Model</th>
              <th className="px-2">Stock</th>
              <th className="px-2">Available</th>
              {/* make actions column a bit wider so buttons stay inside */}
              <th className="px-2 w-[170px]">Actions</th>
            </tr>
          </thead>

          <tbody className="text-center text-secondary text-[13px]">
            {products.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-primary/40 transition-all duration-200 h-[50px]"
              >
                <td className="py-2 px-2">
                  <img
                    src={item.images[0]}
                    className="w-[40px] h-[40px] rounded-lg shadow object-cover"
                  />
                </td>

                <td className="py-2 px-2">{item.productID}</td>

                <td className="py-2 px-2 font-medium whitespace-normal break-words max-w-[150px]">
                  {item.name}
                </td>

                <td className="py-2 px-2 text-green-700 font-bold">
                  {item.price}
                </td>
                <td className="py-2 px-2 text-gray-600">
                  {item.labelledPrice}
                </td>

                <td className="py-2 px-2">{item.category}</td>
                <td className="py-2 px-2">{item.brand}</td>

                <td className="py-2 px-2 whitespace-normal break-words max-w-[120px]">
                  {item.model}
                </td>

                <td className="py-2 px-2">{item.stock}</td>

                <td
                  className={`py-2 px-2 font-bold ${
                    item.isAvailable ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.isAvailable ? "Yes" : "No"}
                </td>

                <td className="py-2 px-2 text-sm">
                  {/* actions kept inside cell width */}
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => {
                        navigate("/admin/update-product", { state: item });
                      }}
                      className="px-3 py-2 rounded-md w-[70px] text-center bg-accent/20 text-accent hover:bg-accent/30 transition"
                    >
                      Edit
                    </button>

                    <ProductDeleteButton
                      productId={item.productID}
                      reload={() => {
                        setLoaded(false);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}

      <Link
        to="/admin/add-product"
        className="fixed right-[30px] bottom-[30px] w-[65px] h-[65px] 
                flex justify-center items-center text-white text-6xl
                bg-accent rounded-full shadow-xl hover:shadow-2xl
                hover:bg-accent/80 transition-all duration-300"
      >
        <BiPlus />
      </Link>
    </div>
  );
}
