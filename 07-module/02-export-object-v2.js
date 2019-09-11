#!/usr/bin/node

  /**
   * 计算圆的面积
   * @param radius {number} 圆的半径
   * @return {number} 面积
  */
  function area(radius){
    return Math.PI * radius * radius;
  }
  function circumference(radius){
    return 2*Math.PI*radius;
  }
  function diameter(radius){
    return 2*radius;
  }

module.exports.area=area;
module.exports.diameter=diameter;
