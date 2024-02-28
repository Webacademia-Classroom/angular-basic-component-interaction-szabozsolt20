# Angular Component Interaction - Practice

## First steps
- Install dependencies:
- `npm i`
- Start the Angular Development Server:
- `npm start`
- Open the app in the browser: http://localhost:4200

## Tasks
- IMPORTANT! Use data-binding instead of fixed values!
- OPEN THE FILES IN EXACTLY THIS ORDER!
- Find the TODO's or TASK's in the files and do them.
- `src\app\user-detail\user-detail.component.ts`
- `src\app\user-detail\user-detail.component.html`
- `src\app\user-list\user-list.component.ts`
- `src\app\user-list\user-list.component.html`
- `src\app\app.component.ts`
- `src\app\app.component.html`

## Testing
- `npm test`
- Testing components separately: `npm run test:01`, `npm run test:02`, `npm run test:03`

## Help
> If you want to give a variable to a component, 
it is only possible if the component waits for it.
Therefore you have to define the variable in the component 
as an @Input property. 
> Define an @Input property: `@Iput user = new User();`
> User the @Input property in the template:  
> `<app-test [user]="currentUser"></app-test>`  
  
> If a component has an event, you can subscribe it 
with event binding.  
Before that, you have to define this event in the component,
like this:
`@Output delUser: EventEmitter<User> = new EventEmitter();`
> To use the event in the parent component, you can link to the name of it:  
`<app-test (delUser)="onDelUser(user)"></app-test>`
