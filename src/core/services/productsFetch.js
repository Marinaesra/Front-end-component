export const getProducts = async () => {
    const response = await fetch('http://localhost:3000/products/products')
    const res = await response.json()

    return res
}