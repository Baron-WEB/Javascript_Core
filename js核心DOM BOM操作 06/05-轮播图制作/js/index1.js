/*
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 */

/*
 * @Author: your name
 * @Date: 2020-07-26 15:39:20
 * @LastEditTime: 2020-07-26 20:57:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \暑期前端培训\5. Javascript   核心DOM BOM操作\js核心DOM BOM操作 06\05-轮播图制作\js\index1.js
 */

window.addEventListener("load", function () {
  let arrow_l = document.querySelector(".arrow-l");
  let arrow_r = document.querySelector(".arrow-r");
  let focus = document.querySelector(".focus");
  let focusWidth = focus.offsetWidth;

  focus.addEventListener("mouseenter", function () {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
  });

  focus.addEventListener("mouseleave", function () {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
  });

  let ul = focus.querySelector("ul");
  let ol = focus.querySelector(".circle");

  for (let i = 0; i < ul.children.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("index", i);
    ol.appendChild(li);
    li.addEventListener("click", function () {
      for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      let index = this.getAttribute("index");
      num = index
      circle = index 
      animate(ul, -index * focusWidth);
    });
  }

  ol.children[0].className = "current";
  let first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  let num = 0;
  let circle = 0;
  let flag = true;
  arrow_r.addEventListener("click", function () {
    if (flag) {
      flag = false
    if (num == ul.children.length - 1) {
      ul.style.left = 0;
      num = 0;
    }
    num++;
    animate(ul, -num * focusWidth,()=>{
      flag = true
    });

    circle++;
    if (circle == ol.children.length) {
      circle = 0;
    }
    for (let i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    ol.children[circle].className = "current";
  }
  });
});
