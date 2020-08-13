import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedSection = 'recipes';

  onNavigate(section: string) {
    this.selectedSection = section;
  }
}
