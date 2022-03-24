async function getData() {
    const response = await fetch('./data/data.json');
    const data = await response.json()

    const list = document.querySelector('.list');
    let row = '';
    for (let key in data) {

        for (let item in data[key]) {
            row += `
                <li class="list__card">
                    <div class="card" style="width: 18rem;">
                        <img src="${data[key][item].img}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${data[key][item].console}</h5>
                            <p class="card-text text">
                                <span class="text__price">Price: ${data[key][item].price}$</span>
                            </p>
                            <p class="card-text text">
                                <span class="text__country">Country: ${data[key][item].origin}</span>
                                <span class="text__games">Games: ${data[key][item].games}</span>
                                <span class="text__sold">Sold: ${data[key][item].sold}</span>
                            </p>
                            <button href="#" class="btn btn-primary">Купи меня блять!</button>
                        </div>
                    </div>
                </li>
            `
        }
        list.innerHTML = row;
    }
}

getData();
