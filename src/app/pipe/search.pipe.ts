import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
        // if no items or empty array
        return [];
    }

    if (!searchText) {
        // no text in search bar
        return items;
    }
    searchText = searchText.toLowerCase(); // case sensitivity issue, turn everything into lowercase

    return items.filter(item => {
      // filter by? name
      return item.name.toLowerCase().includes(searchText);
    });
  }

}
