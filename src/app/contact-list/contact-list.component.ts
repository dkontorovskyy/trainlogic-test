import {Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewChildren} from "@angular/core";

@Component({
  selector: 'contact-list',
  template: `<ul>
                <li *ngFor="let contact of contacts" >
                  <contact [contact]="contact" (click)="addChildContacts($event, contact.id)" #parent></contact>
                </li>
             </ul>`,
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  @Input() contacts: any[];
  @ViewChild('parent', {read: ViewContainerRef}) parent: ViewContainerRef;
  @ViewChildren('parent', {read: ViewContainerRef}) parents: ViewContainerRef;

  private componentRef;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  addChildContacts(event, id) {

    if (this.componentRef == null) {

      let childContacts = this.findChildren(this.contacts, id);
      if (childContacts.length) {

        this.parent.clear();
        event.target.style.backgroundColor = 'cornflowerblue';

        let compFactory = this.cfr.resolveComponentFactory(ContactListComponent);
        this.componentRef = this.parent.createComponent(compFactory);
        this.componentRef.instance.contacts = childContacts;
      }
    } else {
        event.target.style.backgroundColor = 'white';
        this.parent.clear();
        this.componentRef = null;
    }
  }

  findChildren(list, id) {
    for (let listElem of list) {
      if (listElem.contacts) {
        if (listElem.id === id) {
          return listElem.contacts;
        } else {
          this.findChildren(listElem.contacts, id);
        }
      }
    }
  };

}
