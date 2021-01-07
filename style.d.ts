/* 
为了解ts中（找不到模块"./index.scss"）
*/
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}