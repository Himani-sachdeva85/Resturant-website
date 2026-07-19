const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;
            const speed = target / 150;

            const updateCounter = () => {

                count += speed;

                if(count < target){

                    if(target >= 1000){

                        counter.innerText = Math.floor(count).toLocaleString();

                    }else{

                        counter.innerText = Math.floor(count);

                    }

                    requestAnimationFrame(updateCounter);

                }else{

                    if(target >= 1000){

                        counter.innerText = target.toLocaleString();

                    }else{

                        counter.innerText = target;

                    }

                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

},{

    threshold:0.5

});

counters.forEach(counter => observer.observe(counter));