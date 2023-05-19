Sure! Here's an example of how to create a simple Angular web component:

Create a new Angular component:


ng generate component my-web-component
Inside the my-web-component component folder, update the component template and styles:
html

<!-- my-web-component.component.html -->
<p>Hello, {{ name }}!</p>

<!-- my-web-component.component.scss -->
p {
  color: blue;
}
Update the my-web-component component class to include the @Component decorator and export the component:
typescript

// my-web-component.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-web-component',
  templateUrl: './my-web-component.component.html',
  styleUrls: ['./my-web-component.component.scss']
})
export class MyWebComponentComponent {
  @Input() name: string;
}
Create a new Angular module for the web component:


ng generate module my-web-component-module
Inside the my-web-component-module folder, create a new TypeScript file and define the web component using the createCustomElement function provided by Angular:
typescript

// my-web-component.element.ts

import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';
import { MyWebComponentComponent } from './my-web-component.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [MyWebComponentComponent],
  entryComponents: [MyWebComponentComponent]
})
export class MyWebComponentModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const webComponent = createCustomElement(MyWebComponentComponent, {
      injector: this.injector
    });
    customElements.define('my-web-component', webComponent);
  }
}
Update the app.module.ts file to include the MyWebComponentModule in the imports array:
typescript

// app.module.ts

import { NgModule } from '@angular/core';
import { MyWebComponentModule } from './my-web-component-module/my-web-component.module';

@NgModule({
  imports: [
    // ...
    MyWebComponentModule
  ],
  // ...
})
export class AppModule { }
Finally, update the index.html file to include the web component in your application:
html

<!-- index.html -->
<my-web-component name="John"></my-web-component>
Now, when you run your Angular application, you should see the web component rendered with the name "John" and the text color set to blue. The MyWebComponentComponent will be encapsulated as a standalone web component and can be used in any HTML page or framework.

To build the Angular application with the web component, use the following command:



ng build --prod --output-hashing none
The generated files can be found in the dist folder. You can then include the main.js file in your HTML page and use the <my-web-component> tag to include the web component.

Note: Web components created with Angular require a polyfill to work in all browsers. Make sure to include a polyfill like @webcomponents/webcomponentsjs or use a polyfill service for cross-browser compatibility.