import { Component } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent {

  cars = [
    {
      "id": 1,
      "carName": "Toyota Camry",
      "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/10926/1690544712715/front-left-side-47.jpg",
      "capacity": 4,
      "fuelType": "Gasoline",
      "driveMode": "Automatic",
      "releaseYear": 2021,
      "carRent": 400
    },
    {
      "id": 2,
      "carName": "Honda Civic",
      "imageUrl": "https://imgd.aeplcdn.com/0x0/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80",
      "capacity": 4,
      "fuelType": "Hybrid",
      "driveMode": "Manual",
      "releaseYear": 2019,
      "carRent": 350
    },
    {
      "id": 3,
      "carName": "Ford Mustang",
      "imageUrl": "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/equipment/3-2/24_FRD_MST_61047_32.jpg",
      "capacity": 2,
      "fuelType": "Gasoline",
      "driveMode": "Automatic",
      "releaseYear": 2021,
      "carRent": 550
    }, {
      "id": 4,
      "carName": "Chevrolet Corvette",
      "imageUrl": "https://i.gaw.to/vehicles/photos/40/31/403168-2023-chevrolet-corvette.jpg",
      "capacity": 4,
      "fuelType": "Hybrid",
      "driveMode": "Automatic",
      "releaseYear": 2018,
      "carRent": 500
    },
    {
      "id": 5,
      "carName": "BMW M3 GTR",
      "imageUrl": "https://preview.redd.it/bmw-m3-gtr-gt-e46-v0-2qmhy0ztbrla1.jpg?width=720&format=pjpg&auto=webp&s=5630b0c10bacd046e7cd73e3e60ca3bbdc988790",
      "capacity": 4,
      "fuelType": "Hybrid",
      "driveMode": "Manual",
      "releaseYear": 2020,
      "carRent": 600
    },
    {
      "id": 6,
      "carName": "Volkswagen Golf",
      "imageUrl": "https://cdni.autocarindia.com/ExtraImages/20230602055539_2.jpg",
      "capacity": 2,
      "fuelType": "Gasoline",
      "driveMode": "Automatic",
      "releaseYear": 2019,
      "carRent": 450
    },
  ]

  constructor(private router:Router, private route:ActivatedRoute) {

  }

  navigateTo(event: any){
    this.router.navigate(['../womens', event], { relativeTo: this.route, queryParams: { key: event } });
  }


}
