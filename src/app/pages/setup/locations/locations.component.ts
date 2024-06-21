import { Component } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  settings: Record<string, any> = {
    actions: false,
    columns: {
      id: {
        title: "ID",
        type: "number",
        width: "10%",
      },
      name: {
        title: "Name",
        type: "string",
      },
      address: {
        title: "Address",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData().locations;
    this.source.load(data);
  }
}
