import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2DemoComponent } from './ng2-demo.component';
import { phoneServiceProvider } from './phone.service';

declare var angular: any;

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) {
    return url.toString().startsWith("/ng2-route") || url.toString() == "/"
  }
  extract(url: UrlTree) { return url; }
  merge(newUrlPart: UrlTree, rawUrl: UrlTree) { return newUrlPart; }
}

angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({component: Ng2DemoComponent})
  );

@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'ng2-route'
        },
        {
          path: 'ng2-route',
          component: Ng2DemoComponent
        }
      ],
      {
        useHash: true,
        enableTracing: true
      }
    )
  ],
  entryComponents: [
    Ng2DemoComponent
  ],
  providers: [
    phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
