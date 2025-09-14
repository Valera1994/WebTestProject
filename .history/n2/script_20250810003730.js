let input = prompt("n =");
let num = +(input);
if (isNaN(num) || !isFinite(num) || num < 0 || parseInt(input) !== parseFloat(input)){
    alert(`Ошибочное число: ${input}`);
}else{
let strBeg = '<table>';
let html = '';

for(let i = 0; i < num; i++){
    html += '<tr>';
    for(let j = 0; j < num; j++){
        const isWhite = ((i >= j && i < num/2));            
            const classTd = isWhite ? 'black' : 'white';
        html += `<td class="${ classTd }"></td>`;
    }
    html += '</tr>';
}

document.write(strBeg + html + '</table>');
}