// Customers-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample customers data
    const customers = [
        { name: 'John Smith', email: 'john.smith@example.com', phone: '+254 712 345 678', orders: 5, total: 1249.95, lastOrder: '2023-05-15' },
        { name: 'Emma Johnson', email: 'emma.johnson@example.com', phone: '+254 723 456 789', orders: 3, total: 389.97, lastOrder: '2023-05-14' },
        { name: 'Michael Brown', email: 'michael.brown@example.com', phone: '+254 734 567 890', orders: 7, total: 629.93, lastOrder: '2023-05-14' },
        { name: 'Sarah Davis', email: 'sarah.davis@example.com', phone: '+254 745 678 901', orders: 2, total: 399.98, lastOrder: '2023-05-13' },
        { name: 'David Wilson', email: 'david.wilson@example.com', phone: '+254 756 789 012', orders: 1, total: 59.99, lastOrder: '2023-05-12' },
        { name: 'Lisa Miller', email: 'lisa.miller@example.com', phone: '+254 767 890 123', orders: 4, total: 719.96, lastOrder: '2023-05-11' },
        { name: 'James Wilson', email: 'james.wilson@example.com', phone: '+254 778 901 234', orders: 6, total: 1799.94, lastOrder: '2023-05-10' },
        { name: 'Jennifer Lee', email: 'jennifer.lee@example.com', phone: '+254 789 012 345', orders: 3, total: 449.97, lastOrder: '2023-05-09' },
        { name: 'Robert Taylor', email: 'robert.taylor@example.com', phone: '+254 790 123 456', orders: 8, total: 1599.92, lastOrder: '2023-05-08' },
        { name: 'Emily Anderson', email: 'emily.anderson@example.com', phone: '+254 701 234 567', orders: 2, total: 299.98, lastOrder: '2023-05-07' },
        { name: 'William Thomas', email: 'william.thomas@example.com', phone: '+254 712 345 678', orders: 5, total: 749.95, lastOrder: '2023-05-06' },
        { name: 'Olivia Martinez', email: 'olivia.martinez@example.com', phone: '+254 723 456 789', orders: 3, total: 449.97, lastOrder: '2023-05-05' }
    ];

    // Populate customers table
    const customersTable = document.getElementById('customers-table');
    if (customersTable) {
        customers.forEach(customer => {
            const row = document.createElement('tr');
            row.className = 'fade-in';
            row.innerHTML = `
                <td>
                    <div class="customer-info">
                        <div class="customer-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="customer-name">
                            ${customer.name}
                        </div>
                    </div>
                </td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customer.orders}</td>
                <td>$${customer.total.toFixed(2)}</td>
                <td>${customer.lastOrder}</td>
                <td>
                    <button class="action-btn" title="View"><i class="fas fa-eye"></i></button>
                    <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="action-btn" title="Delete"><i class="fas fa-trash"></i></button>
                </td>
            `;
            customersTable.appendChild(row);
        });
    }

    // Update customer stats
    const totalCustomers = document.querySelector('.customer-stats .stat-card:nth-child(1) p');
    const newThisMonth = document.querySelector('.customer-stats .stat-card:nth-child(2) p');
    const activeNow = document.querySelector('.customer-stats .stat-card:nth-child(3) p');

    if (totalCustomers && newThisMonth && activeNow) {
        // These could be dynamic values from an API
        totalCustomers.textContent = customers.length.toLocaleString();
        newThisMonth.textContent = Math.floor(Math.random() * 50) + 20;
        activeNow.textContent = Math.floor(Math.random() * 30) + 5;
    }
});