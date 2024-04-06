import PropTypes from 'prop-types';
import Product from './Product';

export default function ProductsList({products}) {

    return (
        <div className='product-list'>
            {products && products.map((product)=>{
                return <Product key={product.id} product={product}/>
            })}
        </div>
    )
}

ProductsList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}