const MyReact = (function () {
  let hooks = [],
    currentHook = 0; // hooks数组 和 当前hook的索引
  return {
    render(Component) {
      const Comp = Component(); // 执行 effects
      // 执行第7行代码后 hooks为[0,'far',[0,'far']]
      Comp.render();
      currentHook = 0; // 为下一次render重置hook索引
      // 执行第10行代码后 currentHook = 0,进入组件
      return Comp;
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray;
      const deps = hooks[currentHook]; // type: array | undefined
      const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        hooks[currentHook] = depArray;
      }
      currentHook++; // 当前hook处理完毕
    },
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue; // type: any
      const setStateHookIndex = currentHook; // 为了setState引用正确的闭包
      //因为在MyReact.render()调用之后currentHook会置为0
      //所以如果是我们定义const setState = (newState) => (hooks[currentHook] = newState)
      //无论调用哪一个useState这种hook都会修改到第一个hook维护的状态
      //const setStateHookIndex = currentHook;可以记住当前hook维护的是hooks中的哪个状态
      const setState = (newState) => (hooks[setStateHookIndex] = newState);
      return [hooks[currentHook++], setState];
    },
  };
})();
function Counter() {
  const [count, setCount] = MyReact.useState(0);
  const [text, setText] = MyReact.useState("foo"); // 第二个 state hook!
  MyReact.useEffect(() => {
    console.log("effect", count, text);
  }, [count, text]);
  return {
    click: () => setCount(count + 1),
    type: (txt) => setText(txt),
    noop: () => setCount(count),
    render: () => console.log("render", { count, text }),
  };
}
let App;
App = MyReact.render(Counter);
// effect 0 foo
// render {count: 0, text: 'foo'}
App.click();
App = MyReact.render(Counter);
// effect 1 foo
// render {count: 1, text: 'foo'}
App.type("bar");

App = MyReact.render(Counter);
// effect 1 bar
// render {count: 1, text: 'bar'}
App.noop();
App = MyReact.render(Counter);
// // 没有effect执行
// render {count: 1, text: 'bar'}
App.click();
App = MyReact.render(Counter);
// effect 2 bar
// render {count: 2, text: 'bar'}
