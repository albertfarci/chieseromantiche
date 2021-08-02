import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleDeleteComa' })
export class TitleDeleteComaPipe implements PipeTransform {
    transform(value: string): string {
        if(value) {

            if (value.split(",")[1]) return value.split(",")[1];

            return value
        }
    }
}