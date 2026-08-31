const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description:
      'Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description:
      'Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 49.99,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    description:
      'Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 129.99,
    image:
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop',
    description:
      'RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.',
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 39.99,
    image:
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop',
    description:
      'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.',
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    price: 29.99,
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    description:
      'Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.',
  },
  {
    id: 7,
    name: 'Monitor Stand',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    description:
      'Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.',
  },
  {
    id: 8,
    name: 'Webcam HD',
    price: 89.99,
    image:
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop',
    description:
      '1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.',
  },
  {
    id: 9,
    name: 'Bluetooth Speaker',
    price: 69.99,
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    description:
      'Portable Bluetooth speaker with powerful stereo sound, deep bass, and up to 20 hours of battery life.',
  },
  {
    id: 10,
    name: 'Wireless Charger',
    price: 34.99,
    image:
      'https://images.unsplash.com/photo-1591290619618-904f6dd935e3?auto=format&fit=crop&fm=jpg&q=60&w=500',
    description:
      'Fast wireless charging pad with a slim modern design. Compatible with a wide range of smartphones and earbuds.',
  },
  {
    id: 11,
    name: 'Tablet',
    price: 329.99,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
    description:
      'Slim and lightweight tablet with a vibrant display. Great for entertainment, browsing, reading, and productivity.',
  },
  {
    id: 12,
    name: 'Smartphone',
    price: 699.99,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    description:
      'Modern smartphone with a high-resolution display, powerful processor, advanced camera system, and all-day battery.',
  },
  {
    id: 13,
    name: 'Gaming Controller',
    price: 59.99,
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&h=500&fit=crop',
    description:
      'Ergonomic wireless gaming controller with responsive buttons, precision analog sticks, and comfortable grips.',
  },
  {
    id: 14,
    name: 'External SSD',
    price: 119.99,
    image:
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
    description:
      'Compact high-speed external SSD for fast file transfers, backups, and expanding your laptop or desktop storage.',
  },
  {
    id: 15,
    name: 'Noise Cancelling Earbuds',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=500&fit=crop',
    description:
      'Compact wireless earbuds with active noise cancellation, clear audio, and a convenient charging case.',
  },
  {
    id: 16,
    name: 'Smart Home Speaker',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&h=500&fit=crop',
    description:
      'Smart home speaker with room-filling audio and voice assistant support. Control music, timers, and compatible devices.',
  },
  {
    id: 17,
    name: '4K Monitor',
    price: 399.99,
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop',
    description:
      'Ultra-sharp 4K monitor with vivid colors and a spacious display. Perfect for creative work, gaming, and productivity.',
  },
  {
    id: 18,
    name: 'Portable Power Bank',
    price: 44.99,
    image:
      'https://images.unsplash.com/photo-1613070541337-b40942ee6527?auto=format&fit=crop&fm=jpg&q=60&w=500',
    description:
      'High-capacity portable power bank with fast charging support. Keep your phone, tablet, and other devices powered on the go.',
  },
  {
    id: 19,
    name: 'Gaming Headset',
    price: 109.99,
    image:
      'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop',
    description:
      'Immersive gaming headset with surround sound, noise-isolating ear cushions, and a clear adjustable microphone.',
  },
  {
    id: 20,
    name: 'Desk Lamp',
    price: 45.99,
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    description:
      'Modern LED desk lamp with adjustable brightness and flexible positioning. Ideal for workspaces, studying, and reading.',
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
