//Вариант 6
// Напишите функцию, которая удаляет определенный элемент из массива.
//(Input: arr=[1,2,3,4,3,2,1], item=2, Output: [1,3,4,3,1)

function del_el(array, item) {
    array.forEach(function callback(currentValue, index, array)
    {
        if (currentValue == item)
        {
            var cur_index = array.indexOf(currentValue);
            array.splice(cur_index, 1);
        }
    })
    return array
}

var my_array = [1,2,3,4,3,2,1];
var my_item = 2;
var res = del_el(my_array, my_item);

console.log(res);
