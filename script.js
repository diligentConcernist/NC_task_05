let idCount = 1;

function curry(f) {
    return function(a) {
        return function(b) {
            return function(c) {
                    return f(a, b, c);
            }
        };
    };
}

function getListContent(elem, count) {
    let result = [];
  
    for(let i = 0; i < count; i++) {
      let childElement = document.createElement(elem);
      childElement.append("Element " + i);
      childElement.style = "margin: 5px 0px 0px 5px;";
      childElement.id = (idCount-1).toString() + i.toString();
      result.push(childElement);
    }

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Убрать блок";
    removeButton.style = "margin: 5px 0px 5px 5px;";

    result.push(removeButton);
  
    return result;
  }
  
function addElement(a, b, c) {
    const parentElement = document.getElementById(a);
    if (parentElement.id != "container") {
        parentElement.id = idCount++;
        parentElement.style = " margin-left: 3px; margin-top: 3px; border: 2px dashed lightblue;";
    }
    parentElement.append(...getListContent(b, c));
    let collection = parentElement.getElementsByTagName("button");
    for (let i = 0; i < collection.length; i++) {
        collection[i].addEventListener("click",  function(){
            parentElement.remove();
        }, false);
    }
}
  
let makeBlock = curry(addElement);

