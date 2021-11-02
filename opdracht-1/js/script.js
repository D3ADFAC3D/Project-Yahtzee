getRandom = function () {
    random_index = Math.floor(Math.random() * image_array.length);

    selected_image = image_array[random_index];

    document.getElementById('image_shower').src = `./pictures/${selected_image}`
}

image_array = [
    'dice_1.jpg',
    'dice_2.jpg',
    'dice_3.jpg',
    'dice_4.jpg',
    'dice_5.jpg',
    'dice_6.jpg'
]

