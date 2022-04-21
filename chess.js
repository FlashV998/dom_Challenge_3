ChessDiagonal(".parent", 8, 8)
    // fillColorPallete()


function ChessDiagonal(el, rows, cols) {

    element = document.querySelector(el);
    fragment = document.createDocumentFragment()
    let toggle
    for (let i = 1; i <= rows; i++) {
        if (i % 2 == 0) {
            toggle = true
        } else {
            toggle = false
        }
        for (let j = 1; j <= cols; j++) {
            const para = document.createElement("div")
            para.classList.add("box")
                // para.classList.add(cclass)
            para.dataset.position = [i, j]
            if (j % 2 == 0) {
                para.style.background = toggle ? "#FFFFFF" : "#000000"
                para.dataset.color = toggle ? "#FFFFFF" : "#000000"
            } else {
                para.style.background = toggle ? "#000000" : "#FFFFFF"
                para.dataset.color = toggle ? "#000000" : "#FFFFFF"
            }
            fragment.append(para)
        }
        element.append(fragment)
    }


    element.addEventListener("click", fillDiagonals)



    function fillDiagonals(e) {
        let position = e.target.dataset.position
        let i = position.split(',')

        let finalArr = []

        const list = document.querySelectorAll(".box")

        list.forEach(item => {
            item.style.background = item.dataset.color
        });


        initialEl = i[0] + "," + i[1]
        finalArr.push(initialEl)

        let x = i[0];
        let y = i[1];

        while (++x <= 8 && ++y <= 8) {
            // ++x;
            // ++y;
            const z = x + ',' + y
            console.log(z);
            finalArr.push(z)
        }

        x = i[0];
        y = i[1];

        while (--x >= 1 && ++y <= 8) {

            const z = x + ',' + y
            console.log(z);
            finalArr.push(z)
        }

        x = i[0];
        y = i[1];
        while (++x <= 8 && --y >= 1) {

            const z = x + ',' + y
            console.log(z);
            finalArr.push(z)
        }
        x = i[0];
        y = i[1];
        while (--x >= 1 && --y >= 1) {
            const z = x + ',' + y
            console.log(z);
            finalArr.push(z)
        }


        const randomNo = Math.floor((Math.random() * 4) + 1)
        list.forEach(item => {
            const pos = item.dataset.position.split(",")
            const cod = pos[0] + "," + pos[1]
            if (finalArr.includes(cod)) {
                switch (randomNo) {
                    case 1:
                        item.style.background = "#0093AB"
                        break;
                    case 2:
                        item.style.background = "#FFD124"
                        break;
                    case 3:
                        item.style.background = "#019267"
                        break;
                    case 4:
                        item.style.background = "#7B113A"
                        break;

                    default:
                        break;
                }

                // item.style.backgroundImage='url("images/1ravenclaw.png")'
            }
        });
        e.target.style.backgroundImage = `url(images/${randomNo}pp.png)`
        e.target.style.backgroundSize = 'cover'

        e.target.style.backgroundSize = 'cover'
            // e.target.style.backgroundColor='white'




    }



}