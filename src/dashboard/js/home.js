const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.IsIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('hidden')