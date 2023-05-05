const array = [1,2,3,[1,2,3],5,6];


function generateList() {
    const container = document.querySelector('.container');
    const ul = document.createElement('ul');

    for(let i = 0; i < array.length; i++) {
        const li = document.createElement('li');

        if(Array.isArray(array[i])) {
            const childUl = document.createElement('ul');

            for (let k = 0; k < array[i].length; k++) {
                const childLi = document.createElement('li');
                childLi.textContent = array[i][k];
                childUl.appendChild(childLi);
            }
            li.appendChild(childUl);
        } else {
            li.textContent = array[i];
        }
        ul.appendChild(li);
    }
    container.appendChild(ul);
}

generateList()

