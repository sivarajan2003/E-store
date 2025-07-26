import React, { useState } from 'react';
import { Printer, Plus, Trash2 } from 'lucide-react';

interface BillItem {
  name: string;
  quantity: number;
  price: number;
}

const BillGenerator: React.FC = () => {
  const [items, setItems] = useState<BillItem[]>([]);
  const [newItem, setNewItem] = useState<BillItem>({ name: '', quantity: 1, price: 0 });

  const handleAddItem = () => {
    if (!newItem.name || newItem.quantity <= 0 || newItem.price < 0) return;
    setItems([...items, newItem]);
    setNewItem({ name: '', quantity: 1, price: 0 });
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Manual Bill Generator</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newItem.name}
            onChange={e => setNewItem({ ...newItem, name: e.target.value })}
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring w-full"
          />
          <input
            type="number"
            min={1}
            placeholder="Quantity"
            value={newItem.quantity}
            onChange={e => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring w-full"
          />
          <input
            type="number"
            min={0}
            step={0.01}
            placeholder="Price"
            value={newItem.price}
            onChange={e => setNewItem({ ...newItem, price: Number(e.target.value) })}
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring w-full"
          />
        </div>
        <button
          onClick={handleAddItem}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 mb-4"
        >
          <Plus className="mr-2" size={18} /> Add Item
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Product</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Total</th>
                <th className="py-2 px-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.quantity}</td>
                  <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">${(item.quantity * item.price).toFixed(2)}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button onClick={() => handleRemoveItem(idx)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center text-gray-400 py-4">No items added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-6 text-xl font-bold">
          Total: <span className="ml-2 text-blue-700">${getTotal().toFixed(2)}</span>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handlePrint}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 inline-flex items-center"
          >
            <Printer className="mr-2" size={20} /> Print Bill
          </button>
        </div>
      </div>
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .max-w-2xl, .max-w-2xl * {
            visibility: visible;
          }
          .max-w-2xl {
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

export default BillGenerator; 