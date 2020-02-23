import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faWordpress } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly URL_LINKEDIN = 'https://www.linkedin.com/in/javier-pozo-corbalan/';
  readonly URL_GITHUB = 'https://github.com/travelteker';
  readonly URL_WORDPRESS = 'https://desarrollandocodigo.com';
  public linkedin = faLinkedinIn;
  public github = faGithub;
  public wordpress = faWordpress;

  constructor() { }

  ngOnInit() {
  }

}
