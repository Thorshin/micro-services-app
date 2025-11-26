import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8888/customer-service/api/customers')
      .subscribe({
        next: (data) => {
          this.customers = data;
        },
        error: (error) => {
          console.error('Error fetching customers:', error);
        }
      });
  }

  getOders(c: any) {
    this.router.navigateByUrl('/orders/' + c.id);

  }
}
