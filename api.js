// api.js - Backend API Integration for Novo Medical

// ====================================
// CONFIGURATION
// ====================================
// Replace this with your actual backend URL
const API_URL = 'http://localhost:3000';  // Change port if different

// ====================================
// 1. TEST BACKEND CONNECTION
// ====================================
async function testBackendConnection() {
  try {
    const response = await fetch(`${API_URL}/test`);
    const data = await response.json();
    console.log('✅ Backend connected:', data.message);
    showNotification('Backend connected successfully!', 'success');
    return true;
  } catch (error) {
    console.error('❌ Backend connection failed:', error);
    showNotification('Backend connection failed. Using demo data.', 'warning');
    return false;
  }
}

// ====================================
// 2. FETCH ALL PRODUCTS
// ====================================
async function fetchProducts(category = 'all') {
  try {
    const url = `${API_URL}/products` ;
      
    console.log('Fetching products from:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const products = await response.json();
    console.log(`✅ Fetched ${products.length} products`);
    return products;
    
  } catch (error) {
     console.error(error);
    console.error('❌ Error fetching products:', error);
    showNotification('Failed ', 'error');
    return getFallbackProducts(); // Use demo data if backend fails
  }
}

// ====================================
// 3. DISPLAY PRODUCTS ON PAGE
// ====================================
let allProducts = []; // Store all products globally
let currentCategory = 'all';
let showingAll = false;
const INITIAL_DISPLAY_COUNT = 8; // Show 8 products initially

async function displayProducts(category = 'all', showAll = false) {
  const productsGrid = document.getElementById('productsGrid');
  
  if (!productsGrid) {
    console.warn('Products grid not found on this page');
    return;
  }
  
  currentCategory = category;
  showingAll = showAll;
  
  // Show loading state
  productsGrid.innerHTML = `
    <div class="col-span-full text-center py-10">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent"></div>
      <p class="text-gray-500 mt-4">Loading products...</p>
    </div>
  `;
  
  // Fetch products from backend
  allProducts = await fetchProducts(category);
  
  // Clear loading state
  productsGrid.innerHTML = '';
  
  // Check if products exist
  if (allProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="col-span-full text-center py-10">
        <i class="ri-inbox-line text-6xl text-gray-300"></i>
        <p class="text-gray-500 mt-4">No products found in this category</p>
      </div>
    `;
    updateShowMoreButton(0, 0);
    return;
  }
  
  // Determine how many products to show
  const productsToShow = showAll ? allProducts : allProducts.slice(0, INITIAL_DISPLAY_COUNT);
  
  // Display each product
  productsToShow.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.innerHTML += productCard;
  });
  
  // Update show more button
  updateShowMoreButton(productsToShow.length, allProducts.length);
  
  console.log(`Displayed ${productsToShow.length} of ${allProducts.length} products`);
}

// ====================================
// 4. CREATE PRODUCT CARD HTML
// ====================================
function createProductCard(product) {
  return `
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div class="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src="${product.image || 'assets/img/placeholder.jpg'}" 
          alt="${product.name}" 
          class="w-full h-full object-cover"
          onerror="this.src='assets/img/placeholder.jpg'"
        >
        ${product.category ? `
          <span class="absolute top-2 right-2 bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
            ${product.category}
          </span>
        ` : ''}
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-teal-700 mb-2">${product.name}</h3>
        <p class="text-gray-600 text-sm mb-4 line-clamp-2">${product.description || 'No description available'}</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-2xl font-bold text-teal-600">${product.price || 'Contact for price'}</span>
          <button 
            onclick="viewProductDetails(${product.id})" 
            class="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  `;
}

// ====================================
// 5. FILTER PRODUCTS BY CATEGORY
// ====================================
function filterProducts(category) {
  console.log('Filtering by category:', category);
  
  // Update active filter button
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.classList.remove('bg-teal-600', 'text-white');
    btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-300');
  });
  
  event.target.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-300');
  event.target.classList.add('bg-teal-600', 'text-white');
  
  // Display filtered products
  displayProducts(category, false);
}

// ====================================
// 6. TOGGLE SHOW ALL PRODUCTS
// ====================================
function toggleShowAll() {
  showingAll = !showingAll;
  displayProducts(currentCategory, showingAll);
}

// ====================================
// 7. UPDATE SHOW MORE BUTTON
// ====================================
function updateShowMoreButton(showing, total) {
  const showMoreBtn = document.getElementById('showMoreBtn');
  
  if (!showMoreBtn) return;
  
  if (total <= INITIAL_DISPLAY_COUNT) {
    // Hide button if total products are less than initial display count
    showMoreBtn.style.display = 'none';
  } else {
    showMoreBtn.style.display = 'block';
    showMoreBtn.textContent = showingAll 
      ? `Show Less (${showing}/${total})` 
      : `Show All Products (${total})`;
  }
}

// ====================================
// 8. SUBMIT CONTACT FORM
// ====================================
async function submitContactForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  
  // Get form data
  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone?.value.trim() || '',
    message: form.message.value.trim()
  };
  
  // Basic validation
  if (!formData.name || !formData.email || !formData.message) {
    showNotification('Please fill in all required fields', 'error');
    return;
  }
  
  try {
    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="ri-loader-4-line animate-spin"></i> Sending...';
    
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (response.ok && result.success) {
      showNotification('✅ Message sent successfully! We\'ll get back to you soon.', 'success');
      form.reset(); // Clear the form
    } else {
      showNotification('❌ ' + (result.message || 'Failed to send message'), 'error');
    }
    
  } catch (error) {
    console.error('Error submitting form:', error);
    showNotification('❌ Failed to send message. Please try again or contact us directly.', 'error');
  } finally {
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
}

// ====================================
// 9. VIEW PRODUCT DETAILS
// ====================================
function viewProductDetails(productId) {
  console.log('Viewing product:', productId);
  
  // Find the product
  const product = allProducts.find(p => p.id === productId);
  
  if (!product) {
    showNotification('Product not found', 'error');
    return;
  }
  
  // Create modal or redirect to product page
  // For now, show an alert (you can enhance this later with a modal)
  alert(`
Product: ${product.name}
Price: ${product.price}
Category: ${product.category}
Description: ${product.description}

Feature coming soon: Product detail page with full information!
  `);
}

// ====================================
// 10. NOTIFICATION SYSTEM
// ====================================
function showNotification(message, type = 'info') {
  // Remove existing notification if any
  const existing = document.getElementById('notification');
  if (existing) existing.remove();
  
  // Create notification element
  const notification = document.createElement('div');
  notification.id = 'notification';
  notification.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-0`;
  
  // Set colors based on type
  const colors = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white'
  };
  
  notification.className += ` ${colors[type] || colors.info}`;
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200">
        <i class="ri-close-line text-xl"></i>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ====================================
// 11. FALLBACK DEMO PRODUCTS
// ====================================
function getFallbackProducts() {
  return [
    {
      id: 1,
      name: 'Surgical Gloves',
      category: 'disposables',
      price: '50 EGP/box',
      description: 'High-quality latex surgical gloves for medical procedures',
      image: 'assets/img/gloves.jpg'
    },
    {
      id: 2,
      name: 'Face Masks',
      category: 'disposables',
      price: '30 EGP/box',
      description: '3-layer protective face masks, FDA approved',
      image: 'assets/img/masks.jpg'
    },
    {
      id: 3,
      name: 'Vitamin C Tablets',
      category: 'pharmaceuticals',
      price: '80 EGP',
      description: '1000mg Vitamin C supplement for immune support',
      image: 'assets/img/vitaminc.jpg'
    },
    {
      id: 4,
      name: 'Hand Sanitizer',
      category: 'disposables',
      price: '25 EGP',
      description: '70% alcohol-based hand sanitizer, 500ml',
      image: 'assets/img/sanitizer.jpg'
    }
  ];
}

// ====================================
// 12. INITIALIZE ON PAGE LOAD
// ====================================
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 Initializing Novo Medical App...');
  
  // Test backend connection
  const isConnected = await testBackendConnection();
  
  // Load products if products grid exists on page
  if (document.getElementById('productsGrid')) {
    console.log('📦 Loading products...');
    await displayProducts('all', false);
  }
  
  // Attach contact form handler if form exists
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', submitContactForm);
    console.log('📧 Contact form ready');
  }
  
  console.log('✅ App initialized successfully');
});

// ====================================
// EXPORT FUNCTIONS (if using modules)
// ====================================
// Make functions available globally
window.filterProducts = filterProducts;
window.toggleShowAll = toggleShowAll;
window.viewProductDetails = viewProductDetails;
window.submitContactForm = submitContactForm;