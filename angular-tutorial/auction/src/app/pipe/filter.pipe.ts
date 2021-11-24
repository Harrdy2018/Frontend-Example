import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): any {
    console.log("start filter...", list);
    console.log("filterField ",filterField," keyword ",keyword);
    if(!filterField || !keyword){
      return list;
    }
    console.log("-----------");
    return list.filter(item=>{
      let filterValue=item[filterField];
      console.log("filterValue ", filterValue);
      return filterValue.indexOf(keyword)>=0;
    });
  }

}
