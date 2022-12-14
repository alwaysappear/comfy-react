
import Cart from "./Cart"
import AltNav from "./AltNav"
import SideBar from "./SideBar"
import Context from "./Context"
import { useContext } from 'react'
import LoadingSpin from "./LoadingSpin"
import FilterProducts from "./FilterProducts"
import ProductsDisplay from "./ProductsDisplay"

const Products = () => {
    const { allProducts, isLoading, msg } = useContext(Context)

    return (
        <>
            <AltNav />
            <section className="nav-header md:px-20">
                <h1 className="nav-header-h1 md:text-3xl">Home / Products</h1>
            </section>
            <section className="products md:mx-[4rem]">
                <FilterProducts />
                <article className='products-container'>
                    {isLoading ?
                        <LoadingSpin /> :
                        <> {msg ?
                            <p>{msg}</p> :
                            <>
                                {allProducts.length === 0 ?
                                    <p className="h-3">Product not found!</p> :
                                    <>
                                        {allProducts.map(({ id, fields }) => (
                                            <ProductsDisplay key={id} id={id} {...fields} />
                                        ))}
                                    </>}
                            </>}
                        </>}
                </article>
            </section>
            <SideBar />
            <Cart />
        </>
    )
}

export default Products