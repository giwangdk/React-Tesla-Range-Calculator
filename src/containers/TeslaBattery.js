import React, { Component } from 'react';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaStats from '../components/TeslaStats/TeslaStats';
import { getModelData } from '../services/BatteryService';

export default class TeslaBattery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels:19
      }
    }
  }

  calculateStats = (models, value) =>{
    const dataModels = getModelData()
      return models.map(model => {
        const { speed, temperature, climate, wheels } = value
        const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
        console.log("miles", miles)
        console.log("model", model)
        return {
          model,
          miles
        }
      })
  }

  statsUpdate() {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D']

    this.setState({
      carstats: this.calculateStats(carModels, this.state.config)
    })
  }

  componentDidMount() {
    this.statsUpdate();
  }


  render() {

    const { config, carstats } = this.state
    console.log('car her', carstats);
      return (
        <form className='tesla-battery'>
            <h1>Range Per Charge</h1>
          <TeslaCar wheelsize={config.wheels} />
          <TeslaStats carstats={carstats}/>
            <TeslaNotice/>
        </form>
    )
  }
}
