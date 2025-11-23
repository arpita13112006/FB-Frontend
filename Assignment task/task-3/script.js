 const images = [
            "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg",
            "https://tinypng.com/images/social/website.jpg",
            "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg",
            "https://media.istockphoto.com/id/1489566726/photo/leopard-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=kIHqKhwO_JCq94l7yg8zkZuY-v-BbiaaRxr-giy97w4="
        ];

        const img = document.getElementById("slide");
        const prevBtn = document.getElementById("prev");
        const nextBtn = document.getElementById("next");

        let index = 0;
        img.src = images[index];

        // Next image
        nextBtn.addEventListener("click", () => {
            index = (index + 1) % images.length;
            img.src = images[index];
        });

        // Previous image
        prevBtn.addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            img.src = images[index];
        });

        // Pause on hover
        img.addEventListener("mouseenter", () => {
            clearInterval(autoSlide);
        });

        // Resume when mouse leaves
        img.addEventListener("mouseleave", () => {
            autoSlide = setInterval(() => {
                index = (index + 1) % images.length;
                img.src = images[index];
            }, 3000);
        });
