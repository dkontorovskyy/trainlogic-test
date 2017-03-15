import {Component, Input} from "@angular/core";

@Component({
  selector: 'contact',
  template: `
    <div [attr.data-contact]="contact">
      {{contact.name}}
    </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() contact: any;
}
