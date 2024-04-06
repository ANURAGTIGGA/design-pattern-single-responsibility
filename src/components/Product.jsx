import PropTypes from 'prop-types';
import '../assets/styles/Product.css'

export default function Product({product}) {

    return (
        <div className='product-card'>
            <div className='img-wrap'>
                <img src={product.image} />
            </div>
            <div className='details'>
                <div className='product-title'>  
                    <p className='title'>{product.title}</p>
                    <p className='price'>${product.price}</p>
                </div>
                <p className='description'>{product.description}</p>
            </div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.object
}