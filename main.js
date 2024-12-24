function hoverOver(element){
    element.classList.add('cardChangeColor');
}
function leaveHover(element){
    element.classList.remove('cardChangeColor');
}
function changeSubscription(){
    const slider = document.getElementById("sliderBox");
    if(slider.checked){
        const monthlyShown = document.querySelectorAll('#priceM');
        monthlyShown.forEach((element) => {
            element.classList.add('hidden');
        });
        const monthlyHidden = document.querySelectorAll('#priceA');
        monthlyHidden.forEach((element) => {
            element.classList.remove('hidden');
        });
    }
    else{
        const monthlyShown = document.querySelectorAll('#priceM');
        monthlyShown.forEach((element) => {
            element.classList.remove('hidden');
        });
        const monthlyHidden = document.querySelectorAll('#priceA');
        monthlyHidden.forEach((element) => {
            element.classList.add('hidden');
        });
    }
}

const buttons = document.querySelectorAll(".buttonLearn");
buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        hoverOver(button.parentElement);
    });
    button.addEventListener('mouseleave', () => {
        leaveHover(button.parentElement);
    })
});


