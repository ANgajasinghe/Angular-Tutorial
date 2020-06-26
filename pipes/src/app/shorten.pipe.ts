import{ PipeTransform , Pipe } from "@angular/core"


@Pipe({
    name : 'short'
})
export class ShortanPipe implements PipeTransform{

    transform(value: any , limit : number) {
        if (value.length > limit) {
            return value.substr(0,limit) + ' ...';
        }
        return value;
        
    }

}