// 1/Cho danh sách
const arr = [33, 14, 26, 12, 13, 7, 9, 10, 102, 205, 379, 418, 1];

//
//
//

//

//
//

// a) hãy sắp xếp theo thứ tự tăng dần
const increase = () => {
  let increasing = arr.sort((a, b) => {
    return a - b;
  });
  console.log("new array ", increasing);
};

increase();
// b) hãy sắp xếp theo thứ tự giảm dần
const decrease = () => {
  let decreasing = arr.sort((a, b) => {
    return b - a;
  });
  console.log("new decreasing array ", decreasing);
};
decrease();

// c) hãy tìm ra những số chia hết 2 và bỏ chúng vào một mảng mới ( sắp xếp theo thứ tự tăng dần)
// Ví dụ kết quả la newArr = [2,4,6,8]
const newArrayEven = [];
const findEven = () => {
  arr.map((item) => {
    if (item % 2 === 0) {
      newArrayEven.push(item);
    }
  });
  console.log("new array chia het cho 2", newArrayEven);
};
findEven();
// d) hãy tìm ra những số không chia hết cho 2 và bỏ chúng vào mảng mới và sắp xếp theo thứ tự giảm dần.
// Ví dụ kết quả là newList = [205, 105,99,13,1]

const newArrayOdd = [];
const findOdd = () => {
  arr.map((item) => {
    if (item % 3 === 0) {
      newArrayOdd.push(item);
    }
  });
  console.log("new array chia het cho 3", newArrayOdd);
};
findOdd();
// e) Tính tổng của danh sách arr ở đề bài
let sum = 0;
const totalArray = () => {
  arr.forEach((item) => {
    sum = sum + item;
  });
  console.log("total array la :", sum);
};
totalArray();

// f) Tìm số lớn nhất trong mảng ở đề bài

arr.sort((a, b) => {
  return b - a;
});
const biggestNumb = arr[0];
console.log("so lon' nhat", biggestNumb);
// g) tìm số bé nhất trong mảng ở đề bài

arr.sort((a, b) => {
  return a - b;
});
const smallestNumb = arr[0];
console.log("so be' nhat", smallestNumb);

// h) tìm số lớn thứ 2 của mảng
arr.sort((a, b) => {
  return b - a;
});
const bigSecondNumb = arr[1];
console.log("so lon' thu hai", bigSecondNumb);
