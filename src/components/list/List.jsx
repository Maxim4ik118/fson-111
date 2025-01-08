import clsx from "clsx";

import css from "./List.module.scss";

const List = ({ data, title, variant = false }) => {
  // variant -> "bordered"
  // variant -> "success"
  // variant -> "contrast"
  console.log("css: ", css);

  // css[variant] -> "_bordered__dawd123"
  // css["bordered"] ->  css.bordered -> "_bordered__dawd123"

  return (
    <div
      className={clsx(css.listWrapper, {
        [css[variant]]: variant !== false,
      })}
    >
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {data.map((item) => (
          <li key={item.id + item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
