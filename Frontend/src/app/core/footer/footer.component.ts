import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'gitlab',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/gitlab.svg'));
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/github.svg'));
  }

  ngOnInit() {
  }

}
