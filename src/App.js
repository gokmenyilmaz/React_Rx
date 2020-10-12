import React, { Component } from "react";
import Personel from "./Personel";
import { messangerService } from "./messangerService";

import Adres from "./Adres";

export default class App extends Component {
  constructor() {
      super();
    this.state = { adresVarmi: false };
  }

  kaydet1() {
    var date = new Date();
    messangerService.sendMessage(date.toString());
  }

  adresEkle() {
    this.setState({ adresVarmi: true });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.kaydet1()}>Kaydet</button>
        <button onClick={() => this.adresEkle()}>Ekle</button>
        App
        <Personel></Personel>
        {this.state.adresVarmi && <Adres></Adres>}
      </div>
    );
  }
}
