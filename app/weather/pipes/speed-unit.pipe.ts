import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'speedUnit'
})

export class SpeedUnitPipe implements PipeTransform {
    transform(speed: number, unitType: string): string {
        switch(unitType)
        {
            case "kph":
                const kph = Number(speed * 1.61).toFixed(0);
                return kph + " kph";
            default:
                return Number(speed).toFixed(0) + " mph";
        }
    }
}