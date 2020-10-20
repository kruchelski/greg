import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/core/_services';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, 
              private router:Router) { }

  ngOnInit() {
  }

}
