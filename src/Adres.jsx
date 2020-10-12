import React, { Component } from 'react'
import {messangerService} from './messangerService'
export default class Adres extends Component {

    componentDidMount()
    {
        console.log("adres disi mount");
        this.subscribe=messangerService.getMessage().subscribe(m=>{

            console.log(m);
            alert(m.text);
        })
    }



    render() {
        return (
            <div>
                adres
            </div>
        )
    }
}
