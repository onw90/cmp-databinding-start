import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
}


// ------------------------ Angular Lifecycle Hooks:
// ngOnChanges - called after a bound input property changes, the onl;y hook that receive the argument
// ngOnInit - called once the component is initialized
// ngDoCheck - called during every change detection run
// ngAfterContentInit - called after content (ng-content) has been projected into view
// ngAfterContentChecked - called every time the projected content has been checked
// ngAfterViewInit - called after the component's view (and child views) has been initialized
// ngAfterViewChecked - called every time the view (and child views) has been checked
// ngOnDestroy - called once the component is about to be destroyed