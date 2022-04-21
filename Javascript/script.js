const back1 = document.querySelectorAll(".back1");
const forward1 = document.querySelectorAll(".forward1");
const back2 = document.querySelectorAll(".back2");
const forward2 = document.querySelectorAll(".forward2");
const back3 = document.querySelectorAll(".back3");
const firstEvolution = document.querySelectorAll(".first-evolution");
const secondEvolution = document.querySelectorAll(".second-evolution");
const finalEvolution = document.querySelectorAll(".final-evolution");

for (let i = 0; i < forward1.length; i++) {
    forward1[i].addEventListener("click", function(e) {
        secondEvolution[i].classList.remove("visabillity");
        secondEvolution[i].classList.toggle("fade");
        setTimeout(() => {
            secondEvolution[i].classList.toggle("fade");
        }, 100);
        firstEvolution[i].classList.add("visabillity");
    });
}

for (let i = 0; i < back1.length; i++) {
    back1[i].addEventListener("click", function(e) {
        firstEvolution[i].classList.remove("visabillity");
        firstEvolution[i].classList.toggle("fade");
        setTimeout(() => {
            firstEvolution[i].classList.toggle("fade");
        }, 100);

        secondEvolution[i].classList.add("visabillity");
    });
}

for (let i = 0; i < forward2.length; i++) {
    forward2[i].addEventListener("click", function(e) {
        if (i == 1) {
            secondEvolution[i + 1].classList.add("visabillity");
            finalEvolution[i].classList.toggle("fade");
            setTimeout(() => {
                finalEvolution[i].classList.toggle("fade");
            }, 100);
            finalEvolution[i].classList.remove("visabillity");
        } else {
            finalEvolution[i].classList.remove("visabillity");
            secondEvolution[i].classList.add("visabillity");
            finalEvolution[i].classList.toggle("fade");
            setTimeout(() => {
                finalEvolution[i].classList.toggle("fade");
            }, 100);
        }
    });
}
for (let i = 0; i < back2.length; i++) {
    back2[i].addEventListener("click", function(e) {
        if (i == 1) {
            secondEvolution[i + 1].classList.remove("visabillity");
            finalEvolution[i].classList.add("visabillity");
            secondEvolution[i + 1].classList.toggle("fade");
            setTimeout(() => {
                secondEvolution[i + 1].classList.toggle("fade");
            }, 100);
        } else {
            secondEvolution[i].classList.remove("visabillity");
            finalEvolution[i].classList.add("visabillity");
            secondEvolution[i].classList.toggle("fade");
            setTimeout(() => {
                secondEvolution[i].classList.toggle("fade");
            }, 100);
        }
    });
}

// for (let i = 0; i < back2.length; i++) {
//     back2[i].addEventListener("click", function(e) {
//         for (let i = 0; i < firstEvolution.length; i++) {
//             firstEvolution[i].classList.remove("visabillity");
//         }
//         for (let i = 0; i < finalEvolution.length; i++) {
//             finalEvolution[i].classList.add("visabillity");
//         }
//     });
// }

// for (let i = 0; i < forward1.length; i++) {
//     forward2[i].addEventListener("click", (e) => console.log(e));
// }