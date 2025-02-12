<script>
    const words = ["Developer", "Designer", "Freelancer"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function typeEffect() {
        currentWord = words[i];
        document.querySelector(".typed").textContent = isDeleting
            ? currentWord.substring(0, j--)
            : currentWord.substring(0, j++);

        if (!isDeleting && j === currentWord.length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
    typeEffect();
</script>
