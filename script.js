let count = 0;

function curry(f) {
    return function(a) {
        return function(b) {
            return function(c) {
                return function (d) {
                    return f(a, b, c, d);
                }
            }
        };
    };
}

function getListContent(elem, count) {
    let result = [];
  
    for(let i = 0; i < count; i++) {
      let childElement = document.createElement(elem);
      childElement.append(i);
      childElement.style = "margin: 5px 0px 0px 5px;";
      result.push(childElement);
    }

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Убрать блок";
    removeButton.style = "margin: 5px 0px 5px 5px;";

    result.push(removeButton);
  
    return result;
  }
  
function addElement(a, b, c, d) {
    const parentElement = document.createElement(a);
    parentElement.id = count++;
    let elem = document.getElementById(d);
    parentElement.append(...getListContent(b, c));
    parentElement.style = "margin: 20px; border: 1px dashed blue;"
    elem.append(parentElement);
    let collection = parentElement.getElementsByTagName("button");
    for (let i = 0; i < collection.length; i++) {
        collection[i].addEventListener("click",  function(){
            parentElement.remove();
        }, false);
    }
}
  
let makeBlock = curry(addElement);

