import React, { Component } from 'react'
import {messangerService} from './messangerService'

export default class Personel extends Component {


    constructor()
    {
        super();
      
    }

    componentDidMount()
    {
        this.subscribe=messangerService.getMessage().subscribe(m=>{

            console.log(m);
            alert(m.text);
        })
    }

    render() {
        return (
            <div>
                Personel Ekranı
            </div>
        )
    }

    componentWillUnmount()
    {
        // this.subscribe.unsubscribe();
    }
}
