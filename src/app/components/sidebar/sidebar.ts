import {Component, OnInit} from '@angular/core';
import { NgClass } from '@angular/common';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit{
  isDarkMode = false;
  isSidebarClosed = false;
  constructor (private Authservice: AuthService) {}
  ngOnInit():void{
    this.checkMedia();
    window.addEventListener('resize', () => this.checkMedia());
    this.isDarkMode = true
    document.body.classList.add('dark')
  }
  logout(){
    this.Authservice.logout();
  }
  checkMedia(){
    if (window.matchMedia("(max-width: 768px)").matches){
      this.isSidebarClosed= true;
    }
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  toggleSidebar() {
    this.isSidebarClosed= !this.isSidebarClosed;

  }

}
