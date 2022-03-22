let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let string2 = `
/*你好我是小张
*接下来我要给你演示我的功底了
*首先，我要准备一个div
*/
 #div1{

     border: 1px solid red;
     width: 400px;
     height: 400px;
 }  
/*下面我会继续我的工作，
*我要把这些变成一个八卦图
*注意看哦
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
    background-image: linear-gradient(to right, rgba(0,0,0,1)50%, rgba(255,255,255,1)50%);
}
/*八卦图制作过程如下
*/
#div2 {
    position: fixed;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    top: 20px;
    right: 120px;
    background-color: black;
  }
  #div3 {
    position: fixed;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    top: 220px;
    right: 120px;
    background-color: white;
  }
  #div4 {
    position: fixed;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: 80px;
    right: 180px;
    background-color: white;
  }
  #div5 {
    position: fixed;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: 280px;
    right: 180px;
    background-color: black;
  }
`;
let n = 0;
let string3 = " ";
let step = ()=>{
    setTimeout(()=>{
        n = n + 1;
        if (string2[n] === "\n") string3 = string3 + "<br>";
        else if (string2[n] === " ") string3 += "&nbsp;";
        else string3 = string3 + string2[n];
        demo.innerHTML = string3;
        style.innerHTML = string2.substring(0, n);
        if (n + 2 < string2.length) step();
    }, 10);
};
step();

//# sourceMappingURL=index.c4775257.js.map
