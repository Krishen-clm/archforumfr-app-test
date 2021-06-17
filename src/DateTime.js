class DateTime extends React.Component {
    constructor() {
        super();
        this.state = {
            dateTime: null
        }
    }

    tick() {
        var dt = new Date();
        var DD = ("0" + dt.getDate()).slice(-2);
        var MM = ("0" + (dt.getMonth() + 1)).slice(-2);
        var YYYY = dt.getFullYear();
        var hh = ("0" + dt.getHours()).slice(-2);
        var mm = ("0" + dt.getMinutes()).slice(-2);
        var ss = ("0" + dt.getSeconds()).slice(-2);
        var date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
        this.setState({ dateTime: date_string });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>{this.state.dateTime}</div>   
        );
    }
}

export default DateTime;