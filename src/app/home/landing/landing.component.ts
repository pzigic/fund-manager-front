import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LandingService } from '../services/landing.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<any>();

  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service : LandingService) { }

  ngOnInit() {

    }

   ngAfterViewInit() {

     const subscription = this.service.getClients().subscribe(data => {
      console.log(data.content); 
      this.isLoadingResults = false;
      this.dataSource.data = data.content;
      this.dataSource.sort = this.sort;

    },
    catchError(err => {
      this.isLoadingResults = false;
      return observableOf([]);
    })

    );

    setTimeout(() => {
      subscription.unsubscribe();
      this.isLoadingResults = false;
    }, 60000);

 
  }

  logData(){
    const subscription = this.service.getClients().subscribe(data => {
      console.log(data); 


    });
  }
}

