import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Printer } from 'lucide-react';

const Confirmation: React.FC = () => {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-3xl font-bold mb-4">No Order Details Found</h1>
        <p className="text-gray-600 mb-8">It looks like you've landed on this page without placing an order.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12 print:hidden">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold">Thank You for Your Order!</h1>
        <p className="text-gray-600 text-lg mt-2">Your bill has been generated below.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg" id="bill-to-print">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-3xl font-bold">Invoice / Bill</h2>
          <div className="text-right">
            <p className="font-semibold">Order ID: {order.id}</p>
            <p className="text-sm text-gray-600">Date: {order.date}</p>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          {order.items.map((item: any) => (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between font-semibold">
            <p>Subtotal</p>
            <p>${order.total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <p>Shipping</p>
            <p>$0.00</p>
          </div>
          <div className="flex justify-between font-bold text-2xl mt-4 text-gray-800">
            <p>Total</p>
            <p>${order.total.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Thank you for shopping with MyShop!</p>
          <p>If you have any questions, please contact us at support@myshop.com.</p>
        </div>
      </div>
      
      <div className="text-center mt-12 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 mr-4 inline-flex items-center"
        >
          <Printer className="mr-2" size={20} />
          Print Bill
        </button>
        <Link 
          to="/products" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
      
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #bill-to-print, #bill-to-print * {
            visibility: visible;
          }
          #bill-to-print {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Confirmation; 