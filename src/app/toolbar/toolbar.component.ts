import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DialogService } from '../dialog/dialog.service';
import { FizbazService } from '../shared/fizbaz.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  app_name: string;

  constructor(private dialogService: DialogService,
              private fizbazService: FizbazService) {
    this.app_name = environment.APPLICATION_NAME;
  }

  ngOnInit(): void {
  }

  getFizbazMap() {
    return this.fizbazService.fizbaz_map;
  }

  openInstructions(id: string) {
      this.dialogService.open(id);
  }

  closeInstructions(id: string) {
      this.dialogService.close(id);
  }

}
