const review = document.getElementById('text-area');
const post = document.getElementById('post')
const subBtn = document.getElementById('submit-btn')

subBtn.addEventListener('click', ()=>{
  // post.innerText = review.value;
  if (review.value === "") {
    alert("Please enter a review before submitting!");
    return;
  }
  let list = document.createElement('li');
  list.innerText= review.value;
  post.prepend(list);
  review.value ='';
})

