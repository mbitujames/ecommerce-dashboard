// Orders-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample orders data
    const orders = [
        { id: 'ORD-7841', customer: 'John Smith', date: '2023-05-15', amount: 249.99, status: 'completed' },
        { id: 'ORD-7840', customer: 'Emma Johnson', date: '2023-05-14', amount: 129.50, status: 'processing' },
        { id: 'ORD-7839', customer: 'Michael Brown', date: '2023-05-14', amount: 89.99, status: 'completed' },
        { id: 'ORD-7838', customer: 'Sarah Davis', date: '2023-05-13', amount: 199.99, status: 'pending' },
        { id: 'ORD-7837', customer: 'David Wilson', date: '2023-05-12', amount: 59.99, status: 'cancelled' },
        { id: 'ORD-7836', customer: 'Lisa Miller', date: '2023-05-11', amount: 179.99, status: 'completed' },
        { id: 'ORD-7835', customer: 'James Wilson', date: '2023-05-10', amount: 299.99, status: 'processing' },
        { id: 'ORD-7834', customer: 'Jennifer Lee', date: '2023-05-09', amount: 149.99, status: 'completed' },
        { id: 'ORD-7833', customer: 'Robert Taylor', date: '2023-05-08', amount: 99.99, status: 'completed' },
        { id: 'ORD-7832', customer: 'Emily Anderson', date: '2023-05-07', amount: 199.99, status: 'completed' },
        { id: 'ORD-7831', customer: 'William Thomas', date: '2023-05-06', amount: 79.99, status: 'completed' },
        { id: 'ORD-7830', customer: 'Olivia Martinez', date: '2023-05-05', amount: 149.99, status: 'completed' }
    ];

    // Populate orders table
    const ordersTable = document.getElementById('orders-table');
    if (ordersTable) {
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.className = 'fade-in';
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.date}</td>
                <td>$${order.amount.toFixed(2)}</td>
                <td><span class="status ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
                <td>
                    <button class="action-btn" title="View"><i class="fas fa-eye"></i></button>
                    <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="action-btn" title="Delete"><i class="fas fa-trash"></i></button>
                </td>
            `;
            ordersTable.appendChild(row);
        });
    }

    // Filter functionality
    const statusFilter = document.querySelector('.filters select');
    const startDateFilter = document.getElementById('start-date');
    const endDateFilter = document.getElementById('end-date');
    const applyFilterBtn = document.querySelector('.btn-apply');
    const resetFilterBtn = document.querySelector('.btn-reset');

    if (applyFilterBtn && resetFilterBtn) {
        applyFilterBtn.addEventListener('click', function() {
            // Filter logic would go here
            console.log('Filters applied');
        });

        resetFilterBtn.addEventListener('click', function() {
            if (statusFilter) statusFilter.value = 'All';
            if (startDateFilter) startDateFilter.value = '';
            if (endDateFilter) endDateFilter.value = '';
        });
    }

    // Pagination functionality
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const pageNumbers = document.querySelectorAll('.page-numbers span');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            // Previous page logic
            console.log('Previous page');
        });

        nextBtn.addEventListener('click', function() {
            // Next page logic
            console.log('Next page');
        });
    }

    if (pageNumbers.length > 0) {
        pageNumbers.forEach(number => {
            number.addEventListener('click', function() {
                document.querySelector('.page-numbers span.active').classList.remove('active');
                this.classList.add('active');
            });
        });
    }
});