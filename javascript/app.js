const loadData = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const value = data.data.tools;
    loadDataValue(value);
}

const loadDataValue = (result) => {
        const container = document.getElementById('container')
        result.forEach(results =>{
            console.log(results)
            const cardContainer = document.createElement('div');
            cardContainer.classList = 'card bg-base-100 shadow-xl';
            cardContainer.innerHTML = `
            <figure><img src="${results.image}" alt="Shoes" /></figure>
            <div class="card-body space-x-2">
              <h2 class="card-title">Features</h2>
              <li type="1">${results.features[0]}</li>
              <li type="1">${results.features[1]}</li>
              <li type="1">${results.features[2]}</li>
              <div class="card-actions">
                <div class="w-full flex justify-between items-center">
                    <div class="space-y-1">
                        <p class="text-xl font-semibold text-black">${results.name}</p>
                        <p><i class="fa fa-calendar-days"></i> <span>${results.published_in}</span></p>
                    </div>
                    <div>
                        <button class="btn btn-primary"><i class="fa fa-arrow-right"></i></button>
                    </div>
                </div>
              </div>
            </div>
            `
            container.appendChild(cardContainer);
        })
}

loadData()