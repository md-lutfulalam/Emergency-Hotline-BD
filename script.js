document.addEventListener('DOMContentLoaded', () => {
    const services = [    {
            icon: 'assets/emergency.png',
            name: 'National Emergency Number',
            englishName: 'National Emergency',
            number: '999',
            category: 'All'
        },
     {
            icon: 'assets/police.png',
            name: 'Police Helpline Number',
            englishName: 'Police',
            number: '999',
            category: 'Police'
        },
        
     
       
        {
            icon: 'assets/fire-service.png',
            name: 'Fire Service Number',
            englishName: 'Fire Service',
            number: '999',
            category: 'Fire'
        },
        {
            icon: 'assets/ambulance.png',
            name: 'Ambulance Service',
            englishName: 'Ambulance',
            number: '1994-999999',
            category: 'Health'
        },
        {
            icon: 'assets/emergency.png',
            name: 'Women & Child Helpline',
            englishName: 'Women & Child Helpline',
            number: '109',
            category: 'Help'
        },
        {
            icon: 'assets/emergency.png',
            name: 'Anti-Corruption Helpline',
            englishName: 'Anti-Corruption',
            number: '106',
            category: 'Govt'
        },
        {
            icon: 'assets/emergency.png',
            name: 'Electricity Helpline',
            englishName: 'Electricity Outage',
            number: '16216',
            category: 'Electricity'
        },
        {
            icon: 'assets/emergency.png',
            name: 'Brac Helpline',
            englishName: 'Brac',
            number: '16445',
            category: 'NGO'
        },
        {
            icon: 'assets/emergency.png',
            name: 'Bangladesh Railway Helpline',
            englishName: 'Bangladesh Railway',
            number: '163',
            category: 'Travel'
        }
    ];

 

    const cardSection = document.getElementById('card-section');
    const coinCountEl = document.getElementById('coin-count');
    const copyCountEl = document.getElementById('copy-count');
    const favCountEl = document.getElementById('fav-count');
    const callHistoryList = document.getElementById('call-history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');

    let coinCount = 100;
    let copyCount = 0;
    let favCount = 0;



    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="card-header">
                <img src="${service.icon}" alt="${service.name}" class="card-icon">
                <img src="assets/heart.png" alt="Favorite" class="fav-icon">
            </div>
            <h4 class="card-title">${service.name}</h4>
            <p class="card-subtitle">${service.englishName}</p>
            <p class="card-number">${service.number}</p>
            <span class="category-badge">${service.category}</span>
            <div class="card-buttons">
                <button class="card-btn copy-btn">
                    <img src="assets/copy.png" alt="Copy Icon" class="btn-icon">
                    Copy
                </button>
                <button class="card-btn call-btn">
                    <img src="assets/call.svg" alt="Call Icon" class="btn-icon">
                    Call
                </button>
            </div>
        `;
        cardSection.appendChild(card);
    });
     
    cardSection.addEventListener('click', (event) => {
        const target = event.target;
        const card = target.closest('.service-card');
        if (!card) return;

        const serviceName = card.querySelector('.card-title').textContent;
        const serviceNumber = card.querySelector('.card-number').textContent;

        // Heart icon logic
        if (target.classList.contains('fav-icon')) {
            favCount++;
            favCountEl.textContent = favCount;
            return;
        }

        // Copy logic
        if (target.closest('.copy-btn')) {
            copyCount++;
            copyCountEl.textContent = `${copyCount} Copy`;
            navigator.clipboard.writeText(serviceNumber)
                .then(() => {
                    alert(`The number ${serviceNumber} for ${serviceName} has been copied.`);
                });
            return;
        }


        // Call button logic
        if (target.closest('.call-btn')) {
            if (coinCount < 20) {
                alert("Insufficient coins to make a call.");
                return;
            }
            coinCount -= 20;
            coinCountEl.textContent = coinCount;
            alert(`Calling ${serviceName} at ${serviceNumber}.`);

            // Add to Call History
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

            const historyItem = document.createElement('div');
            historyItem.className = 'call-history-item';
            historyItem.innerHTML = `
                <div class="history-details">
                    <span class="history-name">${serviceName}</span>
                    <span class="history-number">${serviceNumber}</span>
                </div>
                <span class="history-time">${timeString}</span>
            `;
            callHistoryList.prepend(historyItem);
            return;
        }
  

    // Clear History Button
    clearHistoryBtn.addEventListener('click', () => {
        callHistoryList.innerHTML = '';
    });



  });



    });