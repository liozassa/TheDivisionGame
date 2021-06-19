import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'la-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
  @Input() id: string;
  private element: any;

  constructor(private dialogService: DialogService, private el: ElementRef) {
    this.element = el.nativeElement;
}

  ngOnInit(): void {
    if (!this.id) {
      console.error('dialog must have an id');
      return;
    }
    
    document.body.appendChild(this.element);
    this.element.addEventListener('click', el => {
      if (el.target.className === 'la-dialog') {
        this.close();
      }
    });

    this.dialogService.add(this);
  }

  ngOnDestroy(): void {
      this.dialogService.remove(this.id);
      this.element.remove();
  }

  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('la-dialog-open');
  }

  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('la-dialog-open');
  }

}
