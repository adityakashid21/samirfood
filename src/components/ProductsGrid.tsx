import { useState } from 'react';
import { Button } from '@/components/ui/button';
import onionImg from '@/assets/onion.jpg';
import chiliImg from '@/assets/chili.jpg';
import grapesImg from '@/assets/grapes.jpg';
import tomatoImg from '@/assets/tomato.jpg';
import carrotImg from '@/assets/carrot.jpg';
import appleImg from '@/assets/apple.jpg';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`premium-card overflow-hidden cursor-pointer transition-all duration-500 ${
        hovered ? 'shadow-large scale-[1.02]' : 'shadow-soft'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="h-64 md:h-72 bg-secondary/30 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.alt}
          className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
          loading="lazy"
          itemProp="image"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground" itemProp="name">{product.name}</h3>
          <p className="text-muted-foreground text-sm mt-1" itemProp="description">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold text-foreground" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="price">{product.price}</span>
          </span>
          <Button variant="premium" size="sm">
            Enquire Now
          </Button>
        </div>
      </div>
    </article>
  );
}

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Red Onion',
    description: 'Export-grade Nashik onions, known worldwide for their quality and taste',
    price: '$2.50/kg',
    image: onionImg,
    alt: 'Fresh red onions from Nashik farms ready for export',
  },
  {
    id: '2',
    name: 'Fresh Green Chili',
    description: 'Spicy, farm-fresh Indian chilies perfect for global cuisines',
    price: '$4.00/kg',
    image: chiliImg,
    alt: 'Vibrant green chilies freshly harvested from Indian farms',
  },
  {
    id: '3',
    name: 'Thompson Grapes',
    description: 'Sweet, seedless grapes from Maharashtra vineyards',
    price: '$6.50/kg',
    image: grapesImg,
    alt: 'Premium Thompson seedless grapes from Maharashtra vineyards',
  },
  {
    id: '4',
    name: 'Cherry Tomatoes',
    description: 'Vine-ripened, perfect for salads and cooking',
    price: '$3.50/kg',
    image: tomatoImg,
    alt: 'Ripe cherry tomatoes on the vine ready for export',
  },
  {
    id: '5',
    name: 'Fresh Carrots',
    description: 'Crisp, orange carrots packed with nutrients',
    price: '$2.00/kg',
    image: carrotImg,
    alt: 'Fresh organic carrots with green tops from Indian farms',
  },
  {
    id: '6',
    name: 'Red Delicious Apple',
    description: 'Crisp Himalayan apples with natural sweetness',
    price: '$5.00/kg',
    image: appleImg,
    alt: 'Red delicious apples from Himalayan orchards',
  },
];

export function ProductsGrid() {
  return (
    <section id="products" className="py-20 md:py-32 bg-background" aria-labelledby="products-heading">
      <div className="premium-container">
        <header className="text-center mb-16">
          <h2 id="products-heading" className="premium-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            Premium Fresh Produce
          </h2>
          <p className="premium-subtext text-lg max-w-2xl mx-auto">
            Explore our selection of export-quality vegetables and fruits, carefully sourced from the finest farms in India.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
