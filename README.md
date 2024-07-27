### Angular Key Concepts

## String interpolation
String Interpolation -> {{ }}   Define a variable in the Constructor like ´this.title="Henry"´ a use in the html lik {{ title }}


## Property binding

Using h1 property like innerHtml if we put it in brackets like [innerHtml] it acts like a type check if the property is type for the h1

## Two-way Biding

[()] Important for forms
´ngModel´: works behind the scenes and it in charge of creating the binding

## Template reference Variable

In Angular, template reference variables can be used to refer to elements within your template. You can access these variables in your component class methods to perform operations like getting the value of an input field.

input type="text" #pokemonName
button (click)="handleClick(pokemonName.value)">Click /button


## NgClass

Dynamically adds or removes CSS classes based on component state. Can be used with object, array, or string syntax.

The *ngFor directive is an Angular structural directive used to repeat a part of the DOM tree (in this case, the tr element) for each item in a collection.

[class.cool-bool]="pokemon.isCool" -> first way
[ngClass]="{'cool-bool': pokemon.isCool}" -> Robust "old" way

## NgStyle

Dynamically sets inline styles based on component state. Utilizes object syntax where keys are CSS properties and values are the corresponding values.

[style.backgroundColor]="(pokemon.isCool ? '#800080' : '')"
[ngStyle]="{backgroundColor : (pokemon.isCool ? '#800080' : '')}"

## NgIf

...
<ng-container *ngIf="pokemonName.length; then pokemonList; else noPokemon">

</ng-container>

<ng-template #pokemonList>
    <h1>All Pokemon available</h1>
    .....
</ng-template >

<ng-template #noPokemon>
    <h1>No pokemon available</h1>
</ng-template>
...