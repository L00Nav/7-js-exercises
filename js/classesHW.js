function isActuallyANumber(n)
{
    if (typeof n !== "number" || n * 0 !== 0)
        return false;
    return true;
}

class Radio
{
    constructor (name, waveMin, waveMax, waves, stations)
    {
        this.name = name;
        this.on = false;
        this.volume = 0;

        this.waveMin = waveMin;
        this.waveMax = waveMax;
        if (this.waveMin === undefined || !isActuallyANumber(this.waveMin))
            this.waveMin = 70;
        if (this.waveMax === undefined || !isActuallyANumber(this.waveMax))
            this.waveMax = 150;
        if (this.waveMin < 30)
            this.waveMin = 30;
        if (this.waveMax > 200)
            this.waveMax = 200;
        
        this.waves = waves;
        if (this.waves === undefined
            || !isActuallyANumber(this.waves)
            || this.waves > this.waveMax
            || this.waves < this.waveMin)
            this.waves = this.waveMin;

        this.stations = stations;
        
        for (let i = 0; i < stations.length; i++)
        {
            if (!Array.isArray(stations) 
            || !Array.isArray(this.stations[i])
            || stations[i].length > 2
            || typeof stations[i][0] !== "string"
            || !isActuallyANumber(stations[i][1]))
            {
                console.log("Invalid station list")
                this.stations = [];
            }
        }

        this.stationChangeLog = 0;
    }

    sound()
    {
        let validStation = 0;
        for (let i = 0; i < this.stations.length; i++)
        {
            if (this.waves === this.stations[i][1])
            {
                console.log("Now playing: ", this.stations[validStation][0]);
                return;
            }
        }
        
        console.log("*Pshhhhh*");
    }

    turnOn()
    {
        this.on = true;
        this.sound();
    }

    turnOff()
    {
        this.on = false;
    }

    isOn()
    {
        return this.on;
    }

    adjustWaveLength(waves)
    {
        if (!this.isOn())
        {
            console.log("No power");
            return;
        }

        if (!isActuallyANumber(waves))
            return;
        this.waves = waves;
        if (this.waveMin < 30)
            this.waveMin = 30;
        if (this.waveMax > 200)
            this.waveMax = 200;
        
        this.sound();

        this.stationChangeLog++;
    }

    adjustVolume(adjustenment)
    {
        if (!this.isOn())
        {
            console.log("No power");
            return;
        }

        if(!isActuallyANumber(adjustenment))
            return;
        if(!Number.isInteger(adjustenment))
            adjustenment = Math.floor(adjustenment);

        this.volume += adjustenment;
        if(this.volume > 100)
            this.volume = 100;
        if(this.volume < 0)
            this.volume = 0;
    }
}

let testRadio = new Radio("Radio-01", 0, 300, 20, [["station1", 50], ["station2", 60]]);
testRadio.adjustVolume(10);
testRadio.turnOn();
testRadio.adjustWaveLength(50);