import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  text: string = '';
  message: string = '';

  messageStyle = {
    'margin-top': '10px',
    'padding': '10px',
    'background': '#d4edda',
    'border-radius': '4px',
    'border': '1px solid #c3e6cb'
  };

  constructor(private http: HttpClient) {}

  sendText() {
    this.http.post('http://localhost:3000/save', { text: this.text }, { 
      responseType: 'text' 
    }).subscribe({
      next: (response) => {
        this.message = response;
        this.text = '';
        setTimeout(() => this.message = '', 3000);
      },
      error: (error) => {
        this.message = 'Error: ' + error.error;
        setTimeout(() => this.message = '', 3000);
      }
    });
  }
}