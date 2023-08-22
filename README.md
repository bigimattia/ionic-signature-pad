# Ionic Signature Pad
This is an ionic 4 plugin to input signature based on [wulfsolter](https://github.com/wulfsolter/angular2-signaturepad.git) repository.
![Example](https://f.cloud.github.com/assets/9873/268046/9ced3454-8efc-11e2-816e-a9b170a51004.png)
# Disclaimer
I made this changes to fix the dependencies problems I had while upgrading to api 33.
This is a situational hotfix used in a personal project.
!! I won't provide any help/support. !!
used node v16.20.1
## How to use

1. Install the plugin
```
npm install --save https://github.com/bigimattia/ionic-signature-pad.git
```

2. Import and add in app.module.ts
```
....
import { IonicSignaturePadModule,IonicsignaturepadProvider } from 'ionicsignaturepad';
....
```

2. In app.module.ts, add the module and provider to imports and providers sections
```
imports {
....
IonicSignaturePadModule,
....
}

providers [
....
IonicsignaturepadProvider,
....
]
```

3. In component.module.ts, import and export the component
```
...
import { IonicSignaturePadModule, IonicsignaturepadComponent } from 'ionicsignaturepad';
...
imports:[
IonicSignaturePadModule
]
...
exports: [
...
IonicsignaturepadComponent,
...
]
```

4. Use it in respective html like this: 
```
<ion-signaturepad [(ngModel)]="signature"></ion-signature>

//Base 64 image of the signature
<p>{{signature}}</p>
```

4. You can also use it with optional options: 
```
<ion-signaturepad [(ngModel)]="signature" [canvasWidth]="300" [canvasHeight]="300" [backgroundColor]="#ffffff"></ion-signature>

//Base 64 image of the signature
<p>{{signature}}</p>
```