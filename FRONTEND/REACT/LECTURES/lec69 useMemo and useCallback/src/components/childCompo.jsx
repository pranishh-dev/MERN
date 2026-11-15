import React, { memo } from "react";

//re-renders on each render on parent compo
// export const ChildCompo = () => {
//   console.log("child compo ho hai");
//   return <div>childCompo</div>;
// };

//alternative to useCallback
export const ChildCompo = memo((props) => {
  console.log(props);
  let { MemoizedGreet } = props;
  //HOC to optimise react compo by reducing unneccessary re-renders and caches components return value that is jsx
  console.log("child compo ho hai");

  return (
    <div>
      childCompo
      <button onClick={MemoizedGreet}>Greet</button>
    </div>
  );
});
