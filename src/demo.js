import { useEffect, useState } from "react";




export default function () {
    var [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const res = await fetch('http://localhost:3004/products')
            const products = await res.json();
            setProducts(products);
        }
        getProducts();
    },[]);
    return (
        <>

            {products.map((pro, index) => {
                return (
                    <div class="card" style={{width:'400px'}} key={index}>
                        <img class="card-img-top" src={pro.image} alt="Card image" />
                        <div class="card-body">
                            <h4 class="card-title">{pro.name}</h4>
                            <p class="card-text">{pro.price}</p>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                )
            })}
        </>
    );
}