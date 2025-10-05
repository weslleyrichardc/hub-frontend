import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { UserInterface } from './interfaces/user.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserPage {
  private userService = inject(UserService);
  user: UserInterface | null = null;

  constructor() {
    this.userService.currentUser().subscribe(user => this.user = user);
  }
}
