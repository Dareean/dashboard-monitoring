// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    // CPU Usage Chart
    const cpuCtx = document.getElementById('cpuChart').getContext('2d');
    const cpuChart = new Chart(cpuCtx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'CPU Usage (%)',
                data: [30, 45, 35, 50, 40, 45],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'CPU Usage Trend'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Memory Usage Chart
    const memoryCtx = document.getElementById('memoryChart').getContext('2d');
    const memoryChart = new Chart(memoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Used', 'Free'],
            datasets: [{
                data: [67, 33],
                backgroundColor: [
                    '#e74c3c',
                    '#2ecc71'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Memory Distribution'
                }
            }
        }
    });

    // Update metrics every 5 seconds
    setInterval(updateMetrics, 5000);
});

// Simulate real-time metric updates
function updateMetrics() {
    const metrics = {
        cpu: Math.floor(Math.random() * 30) + 40, // 40-70%
        memory: Math.floor(Math.random() * 20) + 60, // 60-80%
        disk: Math.floor(Math.random() * 10) + 20, // 20-30%
        network: Math.floor(Math.random() * 50) + 100 // 100-150 Mbps
    };

    document.getElementById('cpu-usage').textContent = metrics.cpu + '%';
    document.getElementById('memory-usage').textContent = metrics.memory + '%';
    document.getElementById('disk-usage').textContent = metrics.disk + '%';
    document.getElementById('network-usage').textContent = metrics.network + ' Mbps';
}