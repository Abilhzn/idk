// navbar berubah saat scroll
const boxElement = document.querySelector("section.box");

const boxObserver = new IntersectionObserver(
    (entries) => {
        const [entry] = entries;

        if (!entry.isIntersecting) {
            document.querySelector("nav").classList.add("scrolled");
        } else {
            document.querySelector("nav").classList.remove("scrolled");
        }
    }, 
    { threshold: 0.9 }
);

boxObserver.observe(boxElement);

// hover navbar



// // prompt untuk mengetahui saldo akhir dari apa yg diinputkan oleh user
// // menentukan hari dan tanggal yang ada saat ini di pc kalian



// let hari = new Date().getDay()
// console.log(hari)

// GamepadButton.bind(h1)
// // const namaGuru = ['dea', 'fikri', 'retno', 'bunga']
// // for(let i = 0; i <= namaGuru.length; i++) {
// //     console.log(namaGuru[i])
// // }