import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{

  ngOnInit(): void {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();

    if (yearElement) {
      yearElement.textContent = currentYear.toString();
    }
  }

}
