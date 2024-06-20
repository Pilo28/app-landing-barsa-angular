  import { Component, Input, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { Player } from '../../models/player.interface';

  @Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
  })
  export class CardComponent implements OnInit {
    @Input() player!: Player;
    isLoading = true;
    hasError = false;

    constructor(private router: Router) {}

    ngOnInit(): void {

      setTimeout(() => {
        if (this.isLoading) {
          this.isLoading = false;
        }
      }, 1000);
    }

    onLoad(): void {
      this.isLoading = false;
    }

    onError(): void {
      this.isLoading = false;
      this.hasError = true;
    }

    navigateToPlayerDetail(): void {
      console.log(`Navigating to player detail for player ID: ${this.player.id}`);
      this.router.navigate(['/home/player', this.player.id]).then(success => {
        if (success) {
          console.log('Navigation was successful!');
        } else {
          console.log('Navigation failed!');
        }
      });
    }
  }
