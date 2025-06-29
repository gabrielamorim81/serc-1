import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import {Sidebar} from '../../sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgClass, Sidebar ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  isDarkMode = false;
  isSidebarClosed = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
