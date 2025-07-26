import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
            onAddToCart={() => onAddToCart(product)}
        />
      ))}
      </div>
    </div>
  );
};

export default ProductGrid;