import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textDeleteSpan' })
export class TextDeleteSpanPipe implements PipeTransform {
    transform(value: string): string {
        var textCompleted = '';
        console.log(value.split('<span class="Apple-converted-space"> </span>'))

        value.split('<span class="Apple-converted-space"> </span>').forEach(element => {
            textCompleted += element
        })

        return textCompleted;
    }
}