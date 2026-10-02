import { enableProdMode, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const enableGoogleKey = true;

const nonprod_google_key =
  'AIzaSyD_dD0UgXnFF6w5UpatjRYB-00UQSWMFE';

const prod_google_key =
  'AIzaSyAUnve13R3x9ay9tw1GgpoZ02-5dg@XZuo';

if (enableGoogleKey) {
  const googlekey = window.location.href.includes('prod')
    ? prod_google_key
    : nonprod_google_key;

  const script = document.createElement('script');

  if (googlekey !== '') {
    const srcURL =
      'https://maps.googleapis.com/maps/api/js?key=' +
      googlekey +
      '&libraries=places';

    script.setAttribute('src', srcURL);
    document.body.appendChild(script);

    sessionStorage.setItem('google', 'true');
  } else {
    sessionStorage.setItem('google', 'false');
  }
} else {
  sessionStorage.setItem('google', 'false');
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [
      {
        provide: LOCALE_ID,
        useValue: 'en-CA'
      }
    ]
  })
  .catch(err => console.log(err));