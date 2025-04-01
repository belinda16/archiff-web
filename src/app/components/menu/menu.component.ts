import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'nav-menu',
  imports: [RouterLinkActive,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  makeLinkActive(e:MouseEvent){
    const eTarget = e.target as HTMLAnchorElement;
    e.preventDefault();
    const target = eTarget;
    const linkWidth = eTarget.offsetWidth;
    const linkOffset = eTarget.offsetLeft;

    // border.style.width = linkWidth + 'px';
    // border.style.left = linkOffset + 'px';
  }
}
