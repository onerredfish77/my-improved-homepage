document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('dohChart').getContext('2d');
    
    // Sample data for both Homer and Marge
    const data = {
        datasets: [{
            label: "Homer's D'oh! Count",
            data: [
                { x: 1, y: 12 },
                { x: 2, y: 15 },
                { x: 3, y: 20 },
                { x: 4, y: 25 },
                { x: 5, y: 32 },
                { x: 6, y: 28 },
                { x: 7, y: 30 },
                { x: 8, y: 35 },
                { x: 9, y: 33 },
                { x: 10, y: 38 },
                { x: 11, y: 29 },
                { x: 12, y: 31 },
                { x: 13, y: 27 },
                { x: 14, y: 24 },
                { x: 15, y: 22 }
            ],
            backgroundColor: '#ffd90f', // Homer's yellow
            borderColor: '#f97306', // Orange border
            borderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            showLine: true, // Show trend line
            tension: 0.4 // Make the line slightly curved
        }, {
            label: "Marge's 'Oh Dear' Count",
            data: [
                { x: 1, y: 8 },
                { x: 2, y: 10 },
                { x: 3, y: 15 },
                { x: 4, y: 18 },
                { x: 5, y: 22 },
                { x: 6, y: 20 },
                { x: 7, y: 25 },
                { x: 8, y: 23 },
                { x: 9, y: 28 },
                { x: 10, y: 24 },
                { x: 11, y: 26 },
                { x: 12, y: 22 },
                { x: 13, y: 20 },
                { x: 14, y: 18 },
                { x: 15, y: 16 }
            ],
            backgroundColor: '#3c8dbc', // Blue for Marge's hair
            borderColor: '#0077be',
            borderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            showLine: true, // Show trend line
            tension: 0.4 // Make the line slightly curved
        }]
    };

    const config = {
        type: 'scatter',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: "Simpson Family Catchphrases Per Season",
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: 20
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Season Number',
                        font: {
                            weight: 'bold'
                        }
                    },
                    min: 0,
                    max: 16
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Catchphrases',
                        font: {
                            weight: 'bold'
                        }
                    },
                    min: 0
                }
            }
        }
    };

    new Chart(ctx, config);
});
