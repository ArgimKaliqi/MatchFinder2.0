import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  private httpService = inject(HttpClient);
  protected users : any;


  ngOnInit(): void {
    this.httpService.get('https://localhost:5001/api/users').subscribe((response) => {this.users = response;})
  }
}
