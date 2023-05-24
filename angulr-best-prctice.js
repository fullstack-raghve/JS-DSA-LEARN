// Angular: Best Practices for 2023
// Best practices in Angular development leads to consistency, code readability, performance, maintainability, and scalability.
// Priyank Bhardwaj
// Bits and Pieces


// Angular development is known for its robustness, scalability, and performance, making it popular among web development companies and developers. Hence adopting best practices in Angular development leads to consistency, code readability, performance, maintainability, and scalability.

// It helps team members work together more efficiently, reduces the chance of bugs, and ensures that the codebase can support evolving needs. The goal of this article is to list down the best practices that Angular Developers should follow to secure a high level of acceptance and success for their applications.

// Learn about some Angular dev tools:



// Regular use of Angular CLI
// Angular CLI is a very powerful tool. It’s highly recommended to install it and use it as much as possible. Using predefined commands instead of doing everything by hand is incredibly time-saving. Listing down some of the commonly used commands

// ng new- To create an application that already works, right out of the box.
// ng generate- To Generate components, routes, services and pipes with a simple command with test shells.
// ng serve- To test your app locally while developing.
// ng test- To run your unit tests or end-to-end tests
// ng lint- run lint rulesets through the code
// Use trackBy function instead of ngFor
// ‘ngFor’ is an Angular-built-in template directive. Instead of displaying the whole DOM tree, you may use ‘trackBy’ instead of ‘ngFor,’ which assists you by providing a unique and personalized identifier to each item.

// When using ‘ngFor,’ you must re-render the whole DOM tree after each change in the array, while when using ‘trackBy,’ you may specify individual modifications, and Angular will assist you in making DOM changes for the specified array.

// Use Async Pipes for Saving the Memory Bytes
// Async Pipes are built-in attributes. They save you a boatload of memory bytes when you build a large-scale application frequented by thousands of users. They subscribe to the observables and return the value it has omitted.

// Hence, they come in handy while marking the components for emitted values and automatically unsubscribing from the observables to limit unnecessary memory leakages.

// @Component({
// selector: 'async-observable-pipe',
// template: '
// observable|async: Time: {{ time | async }}
// ' }) 
// export class AsyncObservablePipeComponent 
// {   
//   time = new Observable((observer: Observer) => {     
//     setInterval(() => observer.next(new Date().toString()), 1000); 
// }); 
// })
// This takes me to the next point.

// Prevent Memory Leaks in Angular Observable
// Observable memory leaks are very common and found in every programming language, library, or framework. Angular is no exception to that. Observables in Angular are very useful as it streamlines your data, but memory leak is one of the very serious issues that might occur if you are not focused. It can create the worst situation in mid of development. Here’re some of the tips which follow to avoid leaks.

// Using async pipe
// Using take(1)
// Using takeUntil()
// Lazy Load your modules
// Lazy loading in feature in angular which allow a module to load when that route is invoked. By default, angular loads all the modules which can degrade initial page load time. To lazy load Angular modules, use loadChildren(instead of component) in your AppRoutingModule routes configuration as follows. Note that all the components, services, assets of lazy loaded components should be paced in separate folder.

// const routes: Routes = [
//   {
//     path: 'items',
//     loadChildren: () => import('./users/users.mdule')
//       .then(m => m.UsersModule)
//   }
// ];
// Follow Single Responsibility Principle
// Components are the building blocks that compose an application. According to SRP in the context of Angular, we should have only one component per file. Technically, you can create multiple classes along with a component in the file but that should be avoided. This makes it easier to read, maintain and avoid hidden bugs. Aim to create components small and reusable. This also avoids code duplication and aligns with the DRY (Don’t Repeat Yourself) Principle.

// Do not sort or filter data in pipe (performance oriented)
// Sorting and Filtering are expensive operations. Angular can call Pipe many times, hence it can degrade performance drastically. We should filter or sort data model in component/service before binding it to template.

// Create reusable components and directives
// Creating reusable components and directives in Angular can save time, effort, and money in the long run. It helps to organize code better, promote consistency, facilitate code sharing, and simplify maintenance. The result is improved development efficiency, overall organization, standardization of design and functionality, as well as scalability of the application.

// 💡 Tip: Once you’ve created your reusable Angular components, you can use an open-source toolchain such as Bit to “harvest” them from any codebase and share them on bit.dev. This would let your team reuse and collaborate on components to write scalable code, speed up development, and maintain a consistent UI.

// Learn more here:
// Build and share independent Angular components — Get Started
// Create Angular components with Bit
// bit.dev

// Change Detection Optimisations
// Use NgIf and not CSS — If DOM elements aren’t visible, instead of hiding them with CSS, it’s a good practice to remove them from the DOM by using *ngIf.
// Move complex calculations into the ngDoCheck lifecycle hook to make your expressions faster.
// Cache complex calculations as long as possible
// Use the OnPush change detection strategy to tell Angular there have been no changes. This lets you skip the entire change detection step.
// However these mechanism will change or be sidelined by more powerful approach termed as Angular Signals from V16. If you want more info on how change detection gets solved do check out article on this.

// How Angular Signals solves an age old problem.
// This is a solution discussion on the challenges w.r.t. change detection Angular developers have been facing currently…
// priyank-bhardwaj.medium.com

// Use Smart — Dumb components
// This pattern helps to use OnPush change detection strategy to tell Angular there have been no changes in the dumb components.

// Smart components are used in manipulating data, calling the APIs, focusing more on functionalities, and managing states. While dumb components are all about cosmetics, they focus more on how they look.

// Use index.ts
// index.ts helps us to keep all related things together so that we don’t have to be bothered about the source file name. This helps reduce the size of the import statement.

// For example, we have user/index.ts as

// export * from './user-auth';
// export * from './user-config';
// export { PaymentComponent }from './user-payment.component';
// We can import all things by using the source folder name.

// import {User, UserConfig } from '..user';
// Conclusion
// These are just a few of the practices that I could highlight. Frankly, the list goes quite long and it varies based on the versions and requirements of the project.