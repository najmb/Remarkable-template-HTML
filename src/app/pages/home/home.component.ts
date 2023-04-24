import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw8079: string = ' '
  rawnril: string = ' '
  raw8hbt: string = ' '
  raw054g: string = ' '
  rawyzax: string = ' '
  rawbzfi: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Remarkable template')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Remarkable template',
      },
    ])
  }
}
