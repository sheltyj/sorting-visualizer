let delay
let inc_delay = 220;
let heights = [];
let i, j;
let size = 60;

let generateArray = document.getElementById("generateArray");
let arraySize = document.getElementById("arraySize");
let speed = document.getElementById("speed");
let bubbleSort = document.getElementById("bubbleSort");
let selectionSort = document.getElementById("selectionSort");
let mergeSort = document.getElementById("mergeSort");
let quickSort = document.getElementById("quickSort");
let array = document.getElementById("array")
let elements = array.getElementsByTagName("div");



//colors
let baseColor = "purple";
let processingColor = "#6ef07d";
let swappingColor = "#e85d54";
let sortedColor = "#549ce8";
