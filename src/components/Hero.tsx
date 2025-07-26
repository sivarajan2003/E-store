import React from 'react';
import { Truck, Shield, Leaf, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fresh, Organic & Delivered
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Farm-fresh produce delivered to your doorstep. Quality you can taste, 
            sustainability you can trust.
          </p>
          
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg">
            Shop Fresh Now
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <Truck className="w-8 h-8 mx-auto mb-2 text-green-200" />
            <p className="text-sm font-medium">Free Delivery</p>
          </div>
          <div className="text-center">
            <Leaf className="w-8 h-8 mx-auto mb-2 text-green-200" />
            <p className="text-sm font-medium">100% Organic</p>
          </div>
          <div className="text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-green-200" />
            <p className="text-sm font-medium">Quality Guaranteed</p>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-green-200" />
            <p className="text-sm font-medium">Same Day Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;