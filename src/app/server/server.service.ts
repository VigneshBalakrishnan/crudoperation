import { Injectable } from '@angular/core';

@Injectable()
export class Service {
  data: any = [
    {
      id: 1,
      name: 'Metrics',
      cpus: '10',
      memory: '250GB',
      storage: '7',
      ip: '74.12.156.2',
      network: '1',
      location: 'Miami',
      lat: 25.7617,
      lng: 80.1918
    },
    {
      id: 1,
      name: 'Usuage',
      cpus: '10',
      memory: '250GB',
      storage: '7',
      ip: '74.12.154.2',
      network: '1',
      location: 'Chennai',
      lat: 13.0827,
      lng: 80.2707
    }
  ];
  getDataSource() {
    return this.data;
  }

  editData(formData) {
    const noneditedData = this.data.filter(data => data.id !== formData.id);
    console.log(noneditedData);
    return [...noneditedData, formData];
  }

  getEditData(formData) {
    return Object.create(
      this.data.filter(value => value.id === formData.id)[0]
    );
  }

  deleteData(index) {
    this.data.splice(index, 1);
    return this.data;
  }

  addData(formData) {
    if (formData.id) {
      return this.editData(formData);
    } else {
      const aid = this.data.length ? this.data[this.data.length - 1].id + 1 : 0;
      const adata = { ...formData, id: aid };
      this.data = [...this.data, adata];
      return this.data;
    }
  }
}
