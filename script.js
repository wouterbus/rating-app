var ratingScore = 0

let allBtn = document.querySelectorAll(".buttons button")
let frontRating = document.querySelector(".front")
let back = document.querySelector(".back")
let submitBtn = document.querySelector('.submit')

allBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        ratingScore = this.innerText
        allBtn.forEach(button => {
            button.classList.remove("active")
        })
        this.classList.add('active')
    })
})

submitBtn.addEventListener('click', function() {
    frontRating.style.display = "none"
    back.querySelector('.result').innerText = ratingScore
    back.style.display = "flex"
})

