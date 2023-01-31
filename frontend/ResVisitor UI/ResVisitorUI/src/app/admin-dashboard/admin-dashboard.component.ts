import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  constructor (private Sharedservice : SharedService)

{}
ngOnInit(): void {
  
}

}
