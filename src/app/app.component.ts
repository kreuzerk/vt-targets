import {Component, ElementRef, inject, QueryList, ViewChildren} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChildren('element') elementRefs: QueryList<ElementRef> | undefined;

  elements: string[] = [];
  private colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'white'];
  private document = inject(DOCUMENT);

  addElement(){
    this.elements.push(this.colors[Math.floor(Math.random() * this.colors.length)]);
  }

  toggleTransform(){
    (this.document as any).startViewTransition(() => {
      this.elementRefs?.forEach((elementRef) => {
        if(elementRef.nativeElement.classList.contains('transform')){
          elementRef.nativeElement.classList.remove('transform');
        }
        else {
          elementRef.nativeElement.classList.add('transform');
        }
      });
    });
  }
}
