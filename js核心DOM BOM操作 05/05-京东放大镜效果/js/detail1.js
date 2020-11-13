/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 */

/*
 * @Author: your name
 * @Date: 2020-07-25 16:11:17
 * @LastEditTime: 2020-07-25 16:11:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \暑期前端培训\5. Javascript   核心DOM BOM操作\js核心DOM BOM操作 05\05-京东放大镜效果\js\detail1.js
 */ 

window.addEventListener('load',function(){
    let preview_img = document.querySelector('.preview_img')
    let mask = document.querySelector('.mask')
    let big = document.querySelector('.big')

    preview_img.addEventListener('mouseover',function() {
        mask.style.display = 'block'
        big.style.display = 'block'
        
    })

    preview_img.addEventListener('mouseout',function() {
        mask.style.display = 'none'
        big.style.display = 'none'
    })

    preview_img.addEventListener('mousemove',function(e){
        let x = e.pageX-this.offsetLeft
        let y = e.pageY-this.offsetTop
        let maskX = x-mask.offsetWidth / 2
        let maskY = y-mask.offsetHeight / 2
        let maskMax = preview_img.offsetWidth-mask.offsetWidth
        if(maskX<=0) {
            maskX = 0
        }else if (maskX>=preview_img.offsetWidth-mask.offsetWidth){
            maskX = preview_img.offsetWidth-mask.offsetWidth
        }
        if(maskY<=0) {
            maskY = 0
        }else if (maskY>=preview_img.offsetHeight-mask.offsetHeight){
            maskY = preview_img.offsetHeight-mask.offsetHeight
        }
        mask.style.left = maskX +"px"
        mask.style.top = maskY +"px"

        let bigIMg = document.querySelector('.bigImg')
        let bigMax = bigIMg.offsetWidth - big.offsetWidth
        
        let bigX = maskX*bigMax/maskMax
        let bigY = maskY*bigMax/maskMax
        let bigY1 = maskX*bigMax/maskMax
        console.log(bigY);
        console.log(bigY1);
        bigIMg.style.left = -bigX+"px"
        bigIMg.style.top = -bigY+"px"
    })
})