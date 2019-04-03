import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    displayedColumns: string[] = ['year', 'winner', 'runner-up', 'total-teams'];
    dataSource = new MatTableDataSource<IPLData>(data);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

export interface IPLData {
    season: number;
    winner: string;
    runnerUp: string;
    totalTeams: number;
}

const data: IPLData[] = [
    {season: 2008, winner: 'Rajasthan Royals', runnerUp: 'Chennai Super Kings', totalTeams: 8},
    {season: 2009, winner: 'Deccan Chargers', runnerUp: 'Royal Challengers Bangalore', totalTeams: 8},
    {season: 2010, winner: 'Chennai Super Kings', runnerUp: 'Mumbai Indians', totalTeams: 8},
    {season: 2011, winner: 'Chennai Super Kings', runnerUp: 'Royal Challengers Bangalore', totalTeams: 10},
    {season: 2012, winner: 'Kolkata Knight Riders', runnerUp: 'Chennai Super Kings', totalTeams: 9},
    {season: 2013, winner: 'Mumbai Indians', runnerUp: 'Chennai Super Kings', totalTeams: 9},
    {season: 2014, winner: 'Kolkata Knight Riders', runnerUp: 'Kings XI Punjab', totalTeams: 8},
    {season: 2015, winner: 'Mumbai Indians', runnerUp: 'Chennai Super Kings', totalTeams: 8},
    {season: 2016, winner: 'Sunrisers Hyderabad', runnerUp: 'Royal Challengers Bangalore', totalTeams: 8},
    {season: 2017, winner: 'Mumbai Indians', runnerUp: 'Rising Pune Supergiant', totalTeams: 8},
    {season: 2018, winner: 'Chennai Super Kings', runnerUp: 'Sunrisers Hyderabad', totalTeams: 8},
    {season: 2019, winner: 'TBD', runnerUp: 'TBD', totalTeams: 8}
];
