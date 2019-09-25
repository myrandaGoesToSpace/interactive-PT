// copies an element "count" number of times

function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}



function insertData() {
	const elementData = [
		{
			name: "Hydrogen",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "nonmetal element",
			information: "This is a test"
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},
		
		{
			name: "Helium",
			symbol: "He",
			atomicNum: "2",
			atomicMass: "4.0026",
			class: "noble-gas element",
			information: "This is a test"
		},
		{
			name: "Lithium",
			symbol: "Li",
			atomicNum: "3",
			atomicMass: "6.94",
			class: "alkali element",
			information: "This is a test"
		},
		{
			name: "Beryllium",
			symbol: "Be",
			atomicNum: "4",
			atomicMass: "9.0122",
			class: "alkaline element",
			information: "This is a test"
		},
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "empty",
			symbol: "H",
			atomicNum: "1",
			atomicMass: "1.008",
			class: "empty element",
			information: ""
		},		
		{
			name: "Aluminum",
			symbol: "Al",
			atomicNum: "13",
			atomicMass: "26.982",
			class: "post-transition element",
			information: "This is a test"
		}
	];
	
	var elements = document.getElementsByClassName("element");
	for (var i = 0; i < elements.length; i++){
		elements[i].innerHTML = elementData[i].symbol;
		elements[i].setAttribute("class", elementData[i].class);
	}
}

window.onload = function() {
	multiplyNode(document.querySelector('.element'), 180, true);
	insertData();
}


