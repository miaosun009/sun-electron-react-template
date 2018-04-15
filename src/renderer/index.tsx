import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Style from "renderer/assets/css/index.scss";
class App extends React.Component {
    public render() {
        return (
            <h1 className={Style.title}>console.info("Welcome Sun React");</h1>
        );
    }

}

ReactDOM.render(<App />, document.getElementById("App"));
