import { Button } from "./components/common/Button";
import { Counter } from "./components/design/counter";
import { Posts } from "./components/design/posts";
import { Layout } from "./components/layout";



function App() {
  return (
      <div className="grid grid-cols-2 gap-4">
        <Counter/>
        <Posts/>
      </div>
    
  );
}

export default App;
