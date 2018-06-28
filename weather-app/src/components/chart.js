import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'
import _ from 'lodash'

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {data : props.data, color : props.color, unit: props.unit};
    }
    render(){
        return (
            <div>
            <Sparklines data={this.state.data} width={180} height={120}>
                <SparklinesLine color={this.state.color}  />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
                <div>{this.average(this.state.data)} {this.state.unit}</div>
            </div>

        );
    }

    average(data) {
        return Math.round(_.sum(data)/data.length);
    }
}