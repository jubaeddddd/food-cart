//BOX1:
document.getElementById('box1btn2pos').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
        //added in own button value
        const val = document.getElementById('box1btn2val')
        const newVal = parseInt(val.innerText) + 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) + 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new1').classList.remove('hidden')
        //total 
        const boxOrderItems = document.getElementById('box1order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box1orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice1').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue

})
document.getElementById('box1btn2neg').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
    if (totalItemsCheck > 0) {
        //added in own button value
        const val = document.getElementById('box1btn2val')
        const newVal = parseInt(val.innerText) - 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) - 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new1').classList.remove('invisible')
        //total 
        const boxOrderItems = document.getElementById('box1order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box1orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice1').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue
    }
})
//BOX2:
document.getElementById('box2btn2pos').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('box2btn2val').innerText)
        //added in own button value
        const val = document.getElementById('box2btn2val')
        const newVal = parseInt(val.innerText) + 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) + 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new2').classList.remove('hidden')
        //total 
        const boxOrderItems = document.getElementById('box2order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box2orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice2').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue

})
document.getElementById('box2btn2neg').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
    if (totalItemsCheck > 0) {
        //added in own button value
        const val = document.getElementById('box2btn2val')
        const newVal = parseInt(val.innerText) - 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) - 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new2').classList.remove('invisible')
        //total 
        const boxOrderItems = document.getElementById('box2order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box2orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice2').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue
    }
})
//BOX3:
document.getElementById('box3btn2pos').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('box3btn2val').innerText)
        //added in own button value
        const val = document.getElementById('box3btn2val')
        const newVal = parseInt(val.innerText) + 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) + 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new3').classList.remove('hidden')
        //total 
        const boxOrderItems = document.getElementById('box3order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box3orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice3').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue

})
document.getElementById('box3btn2neg').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
    if (totalItemsCheck > 0) {
        //added in own button value
        const val = document.getElementById('box3btn2val')
        const newVal = parseInt(val.innerText) - 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) - 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new3').classList.remove('invisible')
        //total 
        const boxOrderItems = document.getElementById('box3order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box3orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice3').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue
    }
})
//BOX 4:
document.getElementById('box4btn2pos').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('box4btn2val').innerText)
        //added in own button value
        const val = document.getElementById('box4btn2val')
        const newVal = parseInt(val.innerText) + 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) + 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new4').classList.remove('hidden')
        //total 
        const boxOrderItems = document.getElementById('box4order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box4orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice4').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue

})
document.getElementById('box4btn2neg').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
    if (totalItemsCheck > 0) {
        //added in own button value
        const val = document.getElementById('box4btn2val')
        const newVal = parseInt(val.innerText) - 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) - 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new4').classList.remove('invisible')
        //total 
        const boxOrderItems = document.getElementById('box4order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box4orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice4').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue
    }
})
//BOX 5:
document.getElementById('box5btn2pos').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('box5btn2val').innerText)
        //added in own button value
        const val = document.getElementById('box5btn2val')
        const newVal = parseInt(val.innerText) + 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) + 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new5').classList.remove('hidden')
        //total 
        const boxOrderItems = document.getElementById('box5order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box5orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice5').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue

})
document.getElementById('box5btn2neg').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
    if (totalItemsCheck > 0) {
        //added in own button value
        const val = document.getElementById('box5btn2val')
        const newVal = parseInt(val.innerText) - 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) - 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new5').classList.remove('invisible')
        //total 
        const boxOrderItems = document.getElementById('box5order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box5orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice5').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue
    }
})
//BOX 6:
document.getElementById('box6btn2pos').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('box6btn2val').innerText)
        //added in own button value
        const val = document.getElementById('box6btn2val')
        const newVal = parseInt(val.innerText) + 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) + 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new6').classList.remove('hidden')
        //total 
        const boxOrderItems = document.getElementById('box6order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box6orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice6').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue

})
document.getElementById('box6btn2neg').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
    if (totalItemsCheck > 0) {
        //added in own button value
        const val = document.getElementById('box6btn2val')
        const newVal = parseInt(val.innerText) - 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) - 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new5').classList.remove('invisible')
        //total 
        const boxOrderItems = document.getElementById('box6order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box6orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice6').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue
    }
})
//BOX 7:
document.getElementById('box7btn2pos').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('box7btn2val').innerText)
        //added in own button value
        const val = document.getElementById('box7btn2val')
        const newVal = parseInt(val.innerText) + 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) + 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new7').classList.remove('hidden')
        //total 
        const boxOrderItems = document.getElementById('box7order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box7orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice7').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue

})
document.getElementById('box7btn2neg').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
    if (totalItemsCheck > 0) {
        //added in own button value
        const val = document.getElementById('box7btn2val')
        const newVal = parseInt(val.innerText) - 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) - 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new7').classList.remove('invisible')
        //total 
        const boxOrderItems = document.getElementById('box7order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box7orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice7').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue
    }
})
//BOX 8:
document.getElementById('box8btn2pos').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('box8btn2val').innerText)
        //added in own button value
        const val = document.getElementById('box8btn2val')
        const newVal = parseInt(val.innerText) + 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) + 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new8').classList.remove('hidden')
        //total 
        const boxOrderItems = document.getElementById('box8order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box8orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice8').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue

})
document.getElementById('box8btn2neg').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
    if (totalItemsCheck > 0) {
        //added in own button value
        const val = document.getElementById('box8btn2val')
        const newVal = parseInt(val.innerText) - 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) - 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new8').classList.remove('invisible')
        //total 
        const boxOrderItems = document.getElementById('box8order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box8orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice8').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue
    }
})
//BOX 9:
document.getElementById('box9btn2pos').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('box9btn2val').innerText)
        //added in own button value
        const val = document.getElementById('box9btn2val')
        const newVal = parseInt(val.innerText) + 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) + 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new9').classList.remove('hidden')
        //total 
        const boxOrderItems = document.getElementById('box9order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box9orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice9').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue

})
document.getElementById('box9btn2neg').addEventListener('click', function () {
    const totalItemsCheck = parseInt(document.getElementById('totalItems').innerText)
    if (totalItemsCheck > 0) {
        //added in own button value
        const val = document.getElementById('box9btn2val')
        const newVal = parseInt(val.innerText) - 1
        val.innerText = newVal
        //total items ordered
        const totalItems = document.getElementById('totalItems')
        const totalItemsNewValue = parseInt(totalItems.innerText) - 1
        totalItems.innerText = totalItemsNewValue
        //initial cart (off)
        document.getElementById('initial').classList.add('hidden')
        //new cart(on)
        document.getElementById('new9').classList.remove('invisible')
        //total 
        const boxOrderItems = document.getElementById('box9order')
        boxOrderItems.innerText = newVal

        const boxOrderItemsPrice = document.getElementById('box9orderPrice')
        const basePrice = parseFloat(document.getElementById('basePrice9').innerText)
        boxOrderItemsPrice.innerText = basePrice * totalItemsNewValue
    }
})