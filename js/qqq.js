document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'MSVM0NY6WFUI30KY'; // Replace with your Alpha Vantage API key
    const symbol = 'QQQ';
    const functionType = 'TIME_SERIES_INTRADAY';
    const interval = '5min';

    fetch(`https://www.alphavantage.co/query?function=${functionType}&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Alpha Vantage's structure is different; you need to adapt the access accordingly
        const timeSeries = data[`Time Series (${interval})`];
        const latestTime = Object.keys(timeSeries)[0];
        const latestData = timeSeries[latestTime];

        const content = `
            <p>Date: ${latestTime}</p>
            <p>Open: ${latestData['1. open']}</p>
            <p>High: ${latestData['2. high']}</p>
            <p>Low: ${latestData['3. low']}</p>
            <p>Close: ${latestData['4. close']}</p>
            <p>Volume: ${latestData['5. volume']}</p>
        `;

        document.getElementById('data').innerHTML = content;
    })
    .catch(error => {
        console.error('Error fetching QQQ data:', error);
        document.getElementById('data2').innerHTML = '<p>Error loading data.</p>';
    });
});
