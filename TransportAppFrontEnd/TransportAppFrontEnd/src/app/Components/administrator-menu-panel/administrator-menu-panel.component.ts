import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-administrator-menu-panel',
  templateUrl: './administrator-menu-panel.component.html',
  styleUrls: ['./administrator-menu-panel.component.css']
})
export class AdministratorMenuPanelComponent implements OnInit {

  constructor(private guard: AuthGuard) { }

  ngOnInit() {
  }

}
