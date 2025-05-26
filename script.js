// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
  // Add click event to all "View Details" buttons
  const viewButtons = document.querySelectorAll('.btn');

  viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // For now, just show an alert (can be enhanced later)
      if (button.textContent.includes('View Details')) {
        alert('Redirecting to product details...');
      } else if (button.textContent.includes('Shop Now')) {
        alert('Taking you to the products page...');
      }
    });
  });

  // Future use: example for saving to cart
  // let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // cart.push({ id: 1, name: 'Product 1', price: 29.99 });
  // localStorage.setItem('cart', JSON.stringify(cart));
});
