const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const bubbleSort = (array) => {
    const n = array.length;
    for (let i = 0; i<n-1; i++) {
        for (let j=0; j<n-i-1; j++) {
            swap(array, j, j+1)
        }
    }
};

const selectionSort = (array) => {
    const n = array.length;
    for (let i=0; i<n-1; i++) {
        let minIndex=i;
        for (let j=i+1; j<n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
    }
};

const quickSort = (array, low, high) => {
    if (low<high) {
        const pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex-1);
        quickSort(array, pivotIndex+1, high);
    }
}

const partition = (array, low, high) => {
    const pivot = array[high];
    let i=low-1;
    for (let j=low; j<high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap (array, i+1, high);
    return i+1;

};

function add() {
    var valorInput = document.getElementById("valor").value;
    var lista = document.getElementById("valores");
    var novoItem = document.createElement("li");
    novoItem.appendChild(document.createTextNode(valorInput));
    lista.appendChild(novoItem);
}

function ordenar() {
    var lista = document.getElementById("valores");
    var items = lista.getElementsByTagName("li");
    var valores = Array.from(items).map(item => parseInt(item.textContent));
    valores.sort((a, b) => a - b);
    lista.innerHTML = valores.reduce((html, valor) => html += `<li>${valor}</li>`, '');
}

function misturar() {
    var lista = document.getElementById("valores");
    var items = lista.getElementsByTagName("li");
    var valores = Array.from(items).map(item => parseInt(item.textContent));
    shuffle(valores);
    lista.innerHTML = valores.reduce((html, valor) => html += `<li>${valor}</li>`, '');
}