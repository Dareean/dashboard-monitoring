// System metrics and utilities
class DashboardMetrics {
    constructor() {
        this.metrics = {
            cpu: 0,
            memory: 0,
            disk: 0,
            network: 0
        };
        this.init();
    }

    init() {
        console.log('🚀 Dashboard Metrics Initialized');
        this.startRealTimeUpdates();
    }

    startRealTimeUpdates() {
        // Simulate WebSocket connection for real-time updates
        setInterval(() => {
            this.updateAllMetrics();
        }, 3000);
    }

    updateAllMetrics() {
        this.metrics = {
            cpu: this.getRandomMetric(40, 70),
            memory: this.getRandomMetric(60, 80),
            disk: this.getRandomMetric(20, 30),
            network: this.getRandomMetric(100, 150)
        };

        this.updateUI();
    }

    getRandomMetric(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateUI() {
        // Update metric cards
        document.getElementById('cpu-usage').textContent = this.metrics.cpu + '%';
        document.getElementById('memory-usage').textContent = this.metrics.memory + '%';
        document.getElementById('disk-usage').textContent = this.metrics.disk + '%';
        document.getElementById('network-usage').textContent = this.metrics.network + ' Mbps';

        // Update trends with random direction
        this.updateTrends();
    }

    updateTrends() {
        const trends = ['up', 'down', 'stable'];
        const trendElements = document.querySelectorAll('.metric-trend');
        
        trendElements.forEach(element => {
            const randomTrend = trends[Math.floor(Math.random() * trends.length)];
            const icons = {
                up: '📈 +' + this.getRandomMetric(1, 10) + '%',
                down: '📉 -' + this.getRandomMetric(1, 5) + '%',
                stable: '➡️ Stable'
            };

            element.className = 'metric-trend ' + randomTrend;
            element.textContent = icons[randomTrend];
        });
    }
}

// Initialize dashboard when page loads
window.addEventListener('load', () => {
    new DashboardMetrics();
});