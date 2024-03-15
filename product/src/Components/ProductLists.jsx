import axios from "axios";
import { useEffect, useState } from "react"
import ProudctCard from "./ProudctCard";
import Seach from "./Seach";
import { useDispatch, useSelector } from "react-redux";
import { setProductName } from "../redux/slices/productStore";

export default ({ loading, setLoading }) => {
    const dispatch = useDispatch()

    const { productName } = useSelector((state) => state?.productStore);
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState({
        category: "",
        title: ""
    })

    useEffect(() => {
        if (!products.length) {
            fetchProducts()
        }
    }, [products])

    async function fetchProducts() {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        setProducts(data);
    }

    function handleChange(e) {
        setQuery({ ...query, [e.target.name]: e.target.value })
    }

    function handleSubmit() {

    }


    return <>
        <Seach query={query} handleChange={handleChange} handleSubmit={handleSubmit} />
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold">Product Store</h1>
            <p>{productName}</p>
            <button onClick={() => dispatch(setProductName("Selam!"))}>Update</button>
        </div>
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {products.map((product, index) => <ProudctCard index={index} product={product} />)}
        </section>
    </>
}