import React, { useEffect, /*useState*/ } from 'react';
// import axios from 'axios'; REDUX EKLEDİKTEN SONRA BUNLAR ÇIKARILDI
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {loading,error, products} = productList;
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false); REDUX EKLEDİKTEN SONRA BUNLAR ÇIKARILDI
    // const [error, setError] = useState(false);
    useEffect(() => {
        dispatch(listProducts());
        // const fetchData = async () => {
        //     try{
        //         setLoading(true);
        //         const {data} = await axios.get('/api/products'); REDUX EKLEDİKTEN SONRA BUNLAR ÇIKARILDI
        //         setLoading(false);
        //         setProducts(data);
        //     }catch(err){
        //         setError(err.message);
        //         setLoading(false);
        //     }
            
        // };
        // fetchData();
    }, []);
    return (
        <div>
            {loading ? ( <LoadingBox></LoadingBox>
            ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
            ) : (
            <div className="row center">
            {products.map(product => (
                <Product product={product}></Product>
            ))}
            </div>
            )}           
        </div>
    );
}