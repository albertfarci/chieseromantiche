import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleDeleteComa' })
export class TitleDeleteComaPipe implements PipeTransform {
    transform(value: string): string {
        return value.split(",")[1];
    }
}