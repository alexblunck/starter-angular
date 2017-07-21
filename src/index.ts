import './polyfills'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './components/app/app.module'

// Bootstrap
platformBrowserDynamic().bootstrapModule(AppModule)
