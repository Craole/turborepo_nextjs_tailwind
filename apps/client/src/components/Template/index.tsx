// components/Component/index.js

// 1) Component props
// always name this "IProps"
// this makes it easy to quickly see the expected props for this component
interface IProps {
  // ...
}

// 2) Main component export
// immediately after, put the component name since this is what this package is all about
// use default function values for default props
export default function ComponentName({
  prop1,
  prop2 = "default value",
}: IProps) {
  // component is structured by
  // 2.1) Hooks
  // if this is more than 5 lines, a custom hook is extracted
  // more about this - https://blog.rstankov.com/extract-react-hook-refactoring/

  // 2.2) Guard clauses
  if (someCondition) {
    return null;
  }

  if (someOtherCondiation) {
    return <SamePlaholder />;
  }

  // 2.3) The happy path of the component
  return <div>My component</div>;
}

// 3) Everything else...
// Here's where the smaller helper hooks, utils, and components live.
// If those get bigger, they can be moved into separate files in the component directory
