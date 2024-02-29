const loadData = async(isShowAll) => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const value = data.data.tools;
    loadDataValue(value, isShowAll);
}

const loadDataValue = (result, isShowAll) => {
        const container = document.getElementById('container')

        // ------------------------showl All conditon------------
        const show = document.getElementById('showbutton');
        if(result.length > 2 && !isShowAll){
            show.classList.remove('hidden')
        }
        else{
            show.classList.add('hidden');
        }
        if(!isShowAll){
            result = result.slice(0, 6);
        }

    // ------------------first part------------------
        result.forEach(results =>{
            // console.log(results)
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
                        <button onclick="showModal('${results.id}');my_modal_4.showModal()" class="btn btn-primary"><i class="fa fa-arrow-right"></i></button>
                    </div>
                </div>
              </div>
            </div>
            `
            container.appendChild(cardContainer);
        })
}

// ---------- show All data handel-----------
const showBtn = (isShowAll) => {
    const showbutton = document.getElementById('showbutton');
    const showdata =  showbutton.innerText;
    loadData(showdata, isShowAll);
}

// ------------------------modal--------------
const showModal = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const values = data.data;
    // console.log(values)
    modalData(values)

}

const modalData = (datas) => {
   const p = document.getElementById('ph');
   p.innerText = datas.description;

   const containere = document.getElementById('image');
   containere.innerHTML = `
   <img src="${datas.image_link[0]}" alt="">
   `
   const title = document.getElementById('title');
   title.innerText = datas.input_output_examples[0].input;

   const detials = document.getElementById('detials');
   detials.innerText = datas.features[3].description;
}

// --------------show All--------------
const showAll = () => {
    loadData(true)
}

// -----------api handel-------------
loadData()