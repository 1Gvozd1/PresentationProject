//глобальная декларация типов для того чтобы import classes from './Counter.module.scss' правильно работало
declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }