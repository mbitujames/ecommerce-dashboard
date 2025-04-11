// Products-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample products data
    const products = [
        { id: 1, name: 'Wireless Headphones', sku: 'PROD-001', price: 99.99, stock: 42, category: 'Electronics', status: 'active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 2, name: 'Smart Watch', sku: 'PROD-002', price: 199.99, stock: 15, category: 'Electronics', status: 'active', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 3, name: 'Running Shoes', sku: 'PROD-003', price: 79.99, stock: 28, category: 'Sports', status: 'active', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 4, name: 'Cotton T-Shirt', sku: 'PROD-004', price: 29.99, stock: 64, category: 'Fashion', status: 'active', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 5, name: 'Blender', sku: 'PROD-005', price: 49.99, stock: 8, category: 'Home', status: 'low-stock', image: 'https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 6, name: 'Perfume', sku: 'PROD-006', price: 59.99, stock: 0, category: 'Beauty', status: 'out-of-stock', image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 7, name: 'Backpack', sku: 'PROD-007', price: 39.99, stock: 22, category: 'Fashion', status: 'active', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 8, name: 'Yoga Mat', sku: 'PROD-008', price: 24.99, stock: 17, category: 'Sports', status: 'active', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
    ];

    // Populate products grid view
    const productsGridView = document.getElementById('products-grid-view');
    if (productsGridView) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card-grid fade-in';
            productCard.innerHTML = `
                <div class="product-image-grid">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info-grid">
                    <h4>${product.name}</h4>
                    <p>${product.category}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p>SKU: ${product.sku}</p>
                    <p>Stock: ${product.stock}</p>
                    <div class="product-actions">
                        <button class="btn btn-edit"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-delete"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
            productsGridView.appendChild(productCard);
        });
    }

    // Populate products list view
    const productsListTable = document.getElementById('products-list-table');
    if (productsListTable) {
        products.forEach(product => {
            const row = document.createElement('tr');
            row.className = 'fade-in';
            row.innerHTML = `
                <td><img src="${product.image}" alt="${product.name}" class="product-thumbnail"></td>
                <td>${product.name}</td>
                <td>${product.sku}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>${product.stock}</td>
                <td>${product.category}</td>
                <td><span class="status ${product.status}">${product.status.replace('-', ' ')}</span></td>
                <td>
                    <button class="action-btn" title="View"><i class="fas fa-eye"></i></button>
                    <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="action-btn" title="Delete"><i class="fas fa-trash"></i></button>
                </td>
            `;
            productsListTable.appendChild(row);
        });
    }

    // Toggle between grid and list view
    document.querySelectorAll('.view-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelector('.view-option.active').classList.remove('active');
            this.classList.add('active');
            
            if (this.dataset.view === 'grid') {
                document.getElementById('products-grid-view').style.display = 'grid';
                document.getElementById('products-list-view').style.display = 'none';
            } else {
                document.getElementById('products-grid-view').style.display = 'none';
                document.getElementById('products-list-view').style.display = 'block';
            }
        });
    });
});