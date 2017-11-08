let imageList = [
    "https://pp.userapi.com/c303702/v303702913/244c/nGyuMbG5gq4.jpg",
    "https://pp.userapi.com/c317331/v317331384/7c6/yKl_Fvx3A6Y.jpg",
    "https://pp.userapi.com/c1423/u47792213/95383790/x_50ad638a.jpg"
];

let index = 1;

let galery = document.getElementById('galery');

galery.onclick = function (event) {
    if (index < imageList.length-1) 
        index++; 
    else 
        index = 0;
    galery.src = imageList[index];
};

