import { Component, OnInit } from "@angular/core";
import { Service } from "./server.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  formModel = {
    id: null,
    name: "",
    cpus: null,
    memory: null,
    storage: null,
    ip: "",
    network: "",
    location: ""
  };
  gridData = [];
  headElements = [
    "Server Name",
    "No of CPU's",
    "Memory",
    "Storage",
    "IP Address",
    "Network Speed",
    "Location",
    "Actions"
  ];
  servers = [
    { value: "1", viewValue: "1" },
    { value: "2", viewValue: "2" },
    { value: "3", viewValue: "3" }
  ];
  lat = 13.0827;
  lng = 80.2707;
  chartType: string = "line";

  chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Usuage of chart" }
  ];

  chartLabels: Array<any> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];

  chartColors: Array<any> = [
    {
      backgroundColor: "rgba(105, 0, 132, .2)",
      borderColor: "rgba(200, 99, 132, .7)",
      borderWidth: 2
    }
  ];

  chartOptions: any = {
    responsive: true
  };
  constructor(private service: Service) {
    this.gridData = this.service.getDataSource();
  }
  editData(data) {
    this.formModel = this.service.getEditData(data);
  }

  delete(data) {
    this.gridData = this.service.deleteData(data);
  }

  submitForm(data) {
    this.formModel = {
      id: null,
      name: "",
      cpus: null,
      memory: null,
      storage: null,
      ip: "",
      network: "",
      location: ""
    };
    this.gridData = this.service.addData(data);
    console.log(this.gridData);
  }

  addDatas() {
    this.formModel = {
      id: null,
      name: "",
      cpus: null,
      memory: null,
      storage: null,
      ip: "",
      network: "",
      location: ""
    };
  }

  loadMap(data) {
    this.lat = data.lat | this.lat;
    this.lng = data.lng | this.lng;
  }

  ngOnInit() {}
}
