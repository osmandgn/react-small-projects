import { CardGroup } from "react-bootstrap"
import data from "../../assets/data/data.json"
import ProductCard from "./product-card"


const Products = () => {
    return(
        <CardGroup className="m-3">
            {
                data.map((product, index) => <ProductCard key={index} {...product} />)
            }
        </CardGroup>
    )
}

export default Products;