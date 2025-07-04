async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        await checkPaused();
        for(let j = 0; j < ele.length-i-1; j++){
            await checkPaused();
            ele[j].style.background = 'yellow';
            ele[j+1].style.background = 'yellow';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'rgb(93, 229, 159)';
            ele[j+1].style.background = 'rgb(93, 229, 159)';
        }
        ele[ele.length-1-i].style.background = 'rgb(239 179 0)';
    }
    ele[0].style.background = 'rgb(239 179 0)';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    highlightSelected('bubbleSort');
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    highlightSelected('');
});
