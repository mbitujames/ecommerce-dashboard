// Dashboard-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Generate random sales data for the chart
    function generateSalesData(days = 7) {
        const data = [];
        for (let i = 0; i < days; i++) {
            data.push(Math.floor(Math.random() * 5000) + 1000);
        }
        return data;
    }
    
    // Initialize charts if they exist on this page
    if (document.getElementById('salesChart')) {
        const salesCtx = document.getElementById('salesChart').getContext('2d');
        const salesChart = new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Sales ($)',
                    data: generateSalesData(),
                    borderColor: '#6c5ce7',
                    backgroundColor: 'rgba(108, 92, 231, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#6c5ce7',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#2d3436',
                        titleFont: { size: 14, weight: 'bold' },
                        bodyFont: { size: 12 },
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    },
                    x: { grid: { display: false } }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });
        
        // Time filter buttons for sales chart
        document.querySelectorAll('.time-filters button').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelector('.time-filters button.active').classList.remove('active');
                this.classList.add('active');
                
                let days;
                switch(this.textContent) {
                    case 'Day': days = 1; break;
                    case 'Week': days = 7; break;
                    case 'Month': days = 30; break;
                    case 'Year': days = 12; break;
                }
                
                // Update chart data
                if (this.textContent === 'Year') {
                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    salesChart.data.labels = months;
                    salesChart.data.datasets[0].data = generateSalesData(12);
                } else {
                    if (this.textContent === 'Day') {
                        const hours = [];
                        for (let i = 0; i < 24; i++) hours.push(i + ':00');
                        salesChart.data.labels = hours;
                        salesChart.data.datasets[0].data = Array(24).fill().map(() => Math.floor(Math.random() * 500) + 100);
                    } else if (this.textContent === 'Month') {
                        const daysInMonth = [];
                        for (let i = 1; i <= 30; i++) daysInMonth.push('Day ' + i);
                        salesChart.data.labels = daysInMonth;
                        salesChart.data.datasets[0].data = generateSalesData(30);
                    } else {
                        salesChart.data.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                        salesChart.data.datasets[0].data = generateSalesData(7);
                    }
                }
                salesChart.update();
            });
        });
    }

    // Category Chart
    if (document.getElementById('categoryChart')) {
        const categoryCtx = document.getElementById('categoryChart').getContext('2d');
        const categoryChart = new Chart(categoryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Electronics', 'Fashion', 'Home & Garden', 'Beauty', 'Sports'],
                datasets: [{
                    data: [25, 20, 15, 30, 10],
                    backgroundColor: ['#6c5ce7', '#00cec9', '#00b894', '#fdcb6e', '#d63031'],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }
        });
    }

    // Traffic Chart
    if (document.getElementById('trafficChart')) {
        const trafficCtx = document.getElementById('trafficChart').getContext('2d');
        const trafficChart = new Chart(trafficCtx, {
            type: 'bar',
            data: {
                labels: ['Direct', 'Organic', 'Social', 'Referral', 'Email'],
                datasets: [{
                    label: 'Traffic Sources',
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        'rgba(108, 92, 231, 0.7)',
                        'rgba(0, 206, 201, 0.7)',
                        'rgba(0, 184, 148, 0.7)',
                        'rgba(253, 203, 110, 0.7)',
                        'rgba(214, 48, 49, 0.7)'
                    ],
                    borderColor: ['#6c5ce7', '#00cec9', '#00b894', '#fdcb6e', '#d63031'],
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: { callback: function(value) { return value + '%'; } }
                    },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Sample orders data for dashboard
    const orders = [
        { id: '#ORD-7841', customer: 'John Smith', date: '2023-05-15', amount: 249.99, status: 'completed' },
        { id: '#ORD-7840', customer: 'Emma Johnson', date: '2023-05-14', amount: 129.50, status: 'processing' },
        { id: '#ORD-7839', customer: 'Michael Brown', date: '2023-05-14', amount: 89.99, status: 'completed' },
        { id: '#ORD-7838', customer: 'Sarah Davis', date: '2023-05-13', amount: 199.99, status: 'pending' },
        { id: '#ORD-7837', customer: 'David Wilson', date: '2023-05-12', amount: 59.99, status: 'cancelled' }
    ];

    // Populate orders table
    const ordersTableBody = document.getElementById('orders-table-body');
    if (ordersTableBody) {
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.className = 'fade-in';
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.date}</td>
                <td>$${order.amount.toFixed(2)}</td>
                <td><span class="status ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
                <td><button class="action-btn"><i class="fas fa-ellipsis-v"></i></button></td>
            `;
            ordersTableBody.appendChild(row);
        });
    }

    // Sample products data for dashboard
    const products = [
        { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, sales: 124, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 2, name: 'Smart Watch', category: 'Electronics', price: 199.99, sales: 98, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 3, name: 'Running Shoes', category: 'Sports', price: 79.99, sales: 156, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 4, name: 'Cotton T-Shirt', category: 'Fashion', price: 29.99, sales: 210, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 5, name: 'Blender', category: 'Home', price: 49.99, sales: 87, image: 'https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 6, name: 'Perfume', category: 'Beauty', price: 59.99, sales: 132, image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
    ];

    // Populate products grid
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card fade-in';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p>${product.category}</p>
                    <div class="product-stats">
                        <span>$${product.price.toFixed(2)}</span> • <span>${product.sales} sold</span>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    // Sample activity feed data
    const activities = [
        { type: 'order', title: 'New order received', description: 'Order #ORD-7841 from John Smith', time: '2 min ago' },
        { type: 'payment', title: 'Payment processed', description: '$249.99 payment for order #ORD-7841', time: '5 min ago' },
        { type: 'user', title: 'New customer registered', description: 'Emma Johnson created an account', time: '1 hour ago' },
        { type: 'order', title: 'Order shipped', description: 'Order #ORD-7839 has been shipped', time: '2 hours ago' },
        { type: 'system', title: 'System update', description: 'New dashboard features deployed', time: '5 hours ago' }
    ];

    // Populate activity feed
    const activityFeed = document.getElementById('activity-feed');
    if (activityFeed) {
        activities.forEach(activity => {
            const activityItem = document.createElement('div');
            activityItem.className = 'activity-item fade-in';
            activityItem.innerHTML = `
                <div class="activity-icon ${activity.type}">
                    <i class="fas fa-${activity.type === 'order' ? 'shopping-bag' : activity.type === 'payment' ? 'credit-card' : activity.type === 'user' ? 'user-plus' : 'cog'}"></i>
                </div>
                <div class="activity-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                    <div class="activity-time">
                        <i class="far fa-clock"></i> ${activity.time}
                    </div>
                </div>
            `;
            activityFeed.appendChild(activityItem);
        });
    }

    // Simulate real-time updates
    function simulateRealTimeUpdates() {
        setInterval(() => {
            // Update metrics randomly
            const metrics = document.querySelectorAll('.metric-info h2');
            if (metrics.length > 0) {
                metrics[0].textContent = '$' + (Math.floor(Math.random() * 10000) + 20000).toLocaleString();
                metrics[1].textContent = (Math.floor(Math.random() * 500) + 1000).toLocaleString();
                metrics[2].textContent = (Math.floor(Math.random() * 100) + 300).toLocaleString();
                metrics[3].textContent = (Math.random() * 2 + 2).toFixed(2) + '%';
            }
            
            // Add new activity
            if (activityFeed) {
                const activityTypes = ['order', 'payment', 'user', 'system'];
                const activityMessages = [
                    'New order received',
                    'Payment processed',
                    'New customer registered',
                    'Inventory updated',
                    'Order shipped',
                    'Product review added'
                ];
                const activityDescriptions = [
                    'Order #ORD-' + (Math.floor(Math.random() * 9000) + 1000) + ' from customer',
                    '$' + (Math.floor(Math.random() * 500) + 50) + ' payment processed',
                    'New customer created an account',
                    'Inventory levels adjusted',
                    'Order has been shipped to customer',
                    'New product review with 5 stars'
                ];
                
                const newActivity = {
                    type: activityTypes[Math.floor(Math.random() * activityTypes.length)],
                    title: activityMessages[Math.floor(Math.random() * activityMessages.length)],
                    description: activityDescriptions[Math.floor(Math.random() * activityDescriptions.length)],
                    time: 'Just now'
                };
                
                const activityItem = document.createElement('div');
                activityItem.className = 'activity-item fade-in';
                activityItem.innerHTML = `
                    <div class="activity-icon ${newActivity.type}">
                        <i class="fas fa-${newActivity.type === 'order' ? 'shopping-bag' : newActivity.type === 'payment' ? 'credit-card' : newActivity.type === 'user' ? 'user-plus' : 'cog'}"></i>
                    </div>
                    <div class="activity-content">
                        <h4>${newActivity.title}</h4>
                        <p>${newActivity.description}</p>
                        <div class="activity-time">
                            <i class="far fa-clock"></i> ${newActivity.time}
                        </div>
                    </div>
                `;
                
                activityFeed.insertBefore(activityItem, activityFeed.firstChild);
                
                // Limit activities to 10 items
                if (activityFeed.children.length > 10) {
                    activityFeed.removeChild(activityFeed.lastChild);
                }
                
                // Update notification badge
                const badge = document.querySelector('.notifications .badge');
                if (badge) {
                    badge.textContent = Math.floor(Math.random() * 5) + 1;
                }
            }
        }, 5000);
    }
    
    simulateRealTimeUpdates();
});