import React, { Component } from "react";
import axios from 'axios';
const EventosContext = React.createContext();

export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  state = {
       eventos:[]
  };
  token = `L6FURTU7FLRJAIH4X6B6`;
  ordenar = 'date'
  obtenerEventos = async busqueda => {
    let url = `GEThttps://www.eventbriteapi.com/v3/events/search/?=${busqueda.nombre}&categories=${busqueda.catergoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
  
const eventos = await axios.get(url);

// this.setState({
//      eventos:
// })
};


  render() {
    return <EventosContext.Provider
    value={{
         eventos:this.state.eventos,
         obtenerEventos:this.obtenerEventos
    }}
    >
         {this.props.children}
    </EventosContext.Provider>;
  }
}

export default EventosProvider;
