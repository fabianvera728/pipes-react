import React from 'react';
import YouTube from 'react-youtube';
import './body.component.css';

class Body extends React.Component {

    stringTest = "holaMundo";
    numberTest = 12342356;
    dateTest = new Date(2018, 9, 20).toDateString();
    arrayTest = [1,2,3,4,5];
    state = {
        objectTest: { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2] } },
        stateJSON: false,
        stateUppercase: false,
        stateLowercase: false,
        stateDecimal: false,
        statePercent: false,
        stateCurrency: false,
        stateDate: false,
        stateAsync: false,
        statePassword: false,
        stateSlice: false,
        promise: new Promise<string>((resolve) =>
            setTimeout(() => {
                resolve('Time');
            }, 4000)
        )
    }

    showPassword(value: string, state: boolean) {
        return state ? value : value.replace(/./g, '*');
    }
    currencyFormat(num: number, symbol: string = "$", n: number = 2) {
        return symbol + num.toFixed(n).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    decimalNumber(value: number, n: number = 2) {
        return value.toFixed(n);
    }
    percentPipe(value: number, n: number = 2) {
        return (value * 100).toFixed(n) + '%';
    }
    slicePipe(value: any, init: number = 0, end: number = value.length) {
        return value.slice(init, end)
    }
    datePipe(value: any) {
        return new Date(value).toLocaleDateString();
    }
    asyncPipe(value: any){
        return value.then((msg:any) => msg)
    }
    changeState(value: string) {
        switch (value) {
            case 'stateJSON':
                this.setState({
                    [value]: !this.state.stateJSON
                });
                break;
            case 'stateUppercase':
                this.setState({
                    [value]: !this.state.stateUppercase
                });
                break;
            case 'stateLowercase':
                this.setState({
                    [value]: !this.state.stateLowercase
                });
                break;
            case 'stateDecimal':
                this.setState({
                    [value]: !this.state.stateDecimal
                });
                break;
            case 'statePassword':
                this.setState({
                    [value]: !this.state.statePassword
                });
                break;
            case 'stateCurrency':
                this.setState({
                    [value]: !this.state.stateCurrency
                });
                break;
            case 'stateSlice':
                this.setState({
                    [value]: !this.state.stateSlice
                })
                break;
            case 'statePercent':
                this.setState({
                    [value]: !this.state.statePercent
                })
                break;
            case 'stateDate':
                this.setState({
                    [value]: !this.state.stateDate
                })
                break;
        }
    }

    render() {
        const opts: any = {
            height: '290',
            width: '450',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            }
        };  
        return (
            <div className="Body">
                <table>
                    <tr className="tableHeader">
                        <td>Name Pipe</td>
                        <td>Example Pipe</td>
                        <td>Apply Pipe</td>
                    </tr>
                    <tr>
                        <td>Uppercase Pipe</td>
                        <td>{this.state.stateUppercase ? this.stringTest.toUpperCase() : this.stringTest}</td>
                        <td><a onClick={this.changeState.bind(this, 'stateUppercase')}> {this.state.stateUppercase ? 'Restore' : 'Apply'}</a></td>
                    </tr>
                    <tr>
                        <td>Lowercase Pipe</td>
                        <td>{this.state.stateLowercase ? this.stringTest.toLowerCase() : this.stringTest}</td>
                        <td><a onClick={this.changeState.bind(this, 'stateLowercase')}> {this.state.stateLowercase ? 'Restore' : 'Apply'}</a></td>
                    </tr>
                    <tr>
                        <td>Decimal Pipe</td>
                        <td>{this.state.stateDecimal ? this.decimalNumber(this.numberTest, 3) : this.numberTest}</td>
                        <td><a onClick={this.changeState.bind(this, 'stateDecimal')}> {this.state.stateDecimal ? 'Restore' : 'Apply'}</a></td>
                    </tr>
                    <tr>
                        <td>Slice Pipe </td>
                        <td>{this.state.stateSlice ? this.slicePipe(this.stringTest, 1, 7) : this.stringTest}</td>
                        <td><a onClick={this.changeState.bind(this, 'stateSlice')}>{this.state.stateSlice ? 'Restore' : 'Apply'}</a></td>
                    </tr>
                    <tr>
                        <td>Percent Pipe</td>
                        <td>{this.state.statePercent ? this.percentPipe(this.numberTest) : this.numberTest}</td>
                        <td><a onClick={this.changeState.bind(this, "statePercent")}>
                        {this.state.statePercent ? 'Restore' : 'Apply'}</a></td>
                    </tr>
                    <tr>
                        <td>Currency Pipe</td>
                        <td>{this.state.stateCurrency ? this.currencyFormat(this.numberTest, 'COP ', 2) : this.numberTest}</td>
                        <td><a onClick={this.changeState.bind(this, 'stateCurrency')}> {this.state.stateCurrency ? 'Restore' : 'Apply'}</a></td>
                    </tr>
                    <tr>
                        <td>Date Pipe</td>
                        <td>{this.state.stateDate?this.datePipe(this.dateTest):this.dateTest}</td>
                        <td><a onClick={this.changeState.bind(this, 'stateDate')}>
                            {this.state.stateDate ? 'Restore' : 'Apply'}</a></td>
                    </tr>
                    <tr>
                        <td>Async Pipe</td>
                        <td>{}</td>
                        <td><a>Apply</a></td>
                    </tr>
                    <tr>
                        <td>Password Pipe</td>
                        <td>{this.showPassword(this.stringTest, this.state.statePassword)}</td>
                        <td><a onClick={this.changeState.bind(this, 'statePassword')}>
                            {this.state.statePassword ? 'Restore' : 'Apply'}
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td>JSON Pipe</td>
                        <td>
                            <pre>
                                {this.state.stateJSON ? (JSON.stringify(this.state.objectTest, null, '\t')) : this.state.objectTest.toString()}
                            </pre>
                        </td>
                        <td><a onClick={this.changeState.bind(this, 'stateJSON')}> {this.state.stateJSON ? 'Restore' : 'Apply'}</a></td>
                    </tr>
                    <tr>
                        <td>For slice Pipe</td>
                        <td>{ this.slicePipe(this.arrayTest,0,4).map((number:number) => 
                            <li>{number}</li>
                        )}</td>
                        <td>Applied</td>
                    </tr>
                </table >
                <YouTube videoId="L3aMtj44chU" opts={opts} onReady={this._onReady}
                    className="youtube" />
            </div >
        );
    }
    _onReady(event: any) {
        // acceso al jugador en todos los controladores de eventos a través del 
        event.target.pauseVideo();
    }

}

export default Body;