const posts2 = document.querySelectorAll('.asia-post2')
const post2ExtraButtons = document.querySelectorAll('.post2-extra-button')


let lastClickedPost;

window.addEventListener('click', checkLastClickedPost);

let postCounter = 1
posts2.forEach(post => {
    post.addEventListener('mouseenter', handlePost2EffectEnter);
    post.addEventListener('mouseleave', handlePost2EffectLeave);
    post.setAttribute('data-order', postCounter)
    postCounter = postCounter + 1
})

post2ExtraButtons.forEach(button=> {
    button.addEventListener('click', handlePost2ExtraButtonClick)
})


function handlePost2EffectEnter(event){
    event.currentTarget.querySelector('.post2-extra-container').classList.add('post2-extra-container__active')
    event.currentTarget.querySelector('.post2-extra-container').classList.add('post2-extra-container__active') 
}
function handlePost2EffectLeave(event){
    event.currentTarget.querySelector('.post2-extra-container').classList.remove('post2-extra-container__active')
};

function handlePost2ExtraButtonClick(event){

    
    const order = Number(event.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-order'))

    if(document.querySelector(`[data-order="${order+1}"]`)){
        document.querySelector(`[data-order="${order+1}"]`).classList.add('asia-post2__behind')
    }
    

    event.currentTarget.parentNode.parentNode.classList.add('post2-extra-container__clicked')
    console.log(event.currentTarget.parentNode.parentNode.parentNode);
    lastClickedPost = event.currentTarget.parentNode.parentNode.parentNode;
    

}
function checkLastClickedPost(event){
    console.log(event.target)
    console.log(lastClickedPost)
    if (!lastClickedPost.contains(event.target)){
        
        console.log('clicked outside element')
        lastClickedPost.querySelector('.post2-extra-container').animate(
            [
                { transform: "translateX(100px) translateY(30px) scaleX(1) scaleY(1) rotate(10deg)",zIndex: 10}, 
                { transform: "translateX(370px) translateY(20px) scaleX(0.7) scaleY(0.9)rotate(-10deg)",zIndex: 0 },
                { transform: "translateX(70px)",zIndex: 0 }],
            {
              fill: "forwards",
              
              duration: 500,
            }).play()
        lastClickedPost.querySelector('.post2-extra-container').classList.remove('post2-extra-container__clicked')
    }
}