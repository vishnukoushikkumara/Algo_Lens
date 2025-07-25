async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'rgb(239 179 0)';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        await checkPaused();
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'yellow';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'yellow';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'rgb(239 179 0)';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'rgb(239 179 0)';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    highlightSelected('insertionSort');
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    highlightSelected('');
});