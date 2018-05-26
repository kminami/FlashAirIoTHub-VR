// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module} from 'react-360-web';

class MyModule extends Module {
  constructor(ctx) {
    super('MyModule')
    this._ctx = ctx;
    this.locationHref = location.href;
  }
  setLocationHref(uri) {
    location.href = uri;
  }
  $fetchBlob(url, init, resolveId, rejectId) {
    fetch(url, init).then(response => {
      if (response.status === 401) {
        // TODO this.props.setAccessToken('');
        return;
      }
      if (response.status !== 200) {
        console.log('error', response.status);
        return;
      }
      response.blob().then(data => {
        const objectURL = URL.createObjectURL(data);
        this._ctx.invokeCallback(resolveId, [objectURL]);
      });
    });
  }
}

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      ctx => new MyModule(ctx),
    ],
    ...options,
  });

  // Render your app content to the default cylinder surface
  const s = r360.getDefaultSurface();
  s.resize(1300, 600)
  r360.renderToSurface(
    r360.createRoot('FlashAirIoTHub_VR', { /* initial props */ }),
    s,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
