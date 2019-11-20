import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

class AppState {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }
}

@observer
class AppRoot extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
            </div>
        );
     }

     onReset = () => {
         this.props.appState.resetTimer();
     }
};

const appState = new AppState();
ReactDOM.render(<AppRoot appState={appState} />, document.getElementById('root'));
