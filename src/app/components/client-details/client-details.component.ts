import { Client } from './../../models/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance = false;
  hasBalanceUpdateInput = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get the client
    this.clientService.getClient(this.id).subscribe(client => {
      if (client.balance > 0) {
        this.hasBalance = true;
      }
      this.client = client;
      console.log(this.client);
    });
  }
  updateBalance(id: string) {
    this.clientService.updateClient(this.id, this.client);
    this.flashMessagesService.show('Balance Updated', {
      cssClass: 'alert-success', timeout: 4000
    });
    this.router.navigate(['/client/' + this.id]);
  }

  onDeleteClick() {
    if (confirm('Are you sure to delete?')) {
      this.clientService.deleteClient(this.id);
      this.flashMessagesService.show('Client removed', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/']);
    }
  }
}
