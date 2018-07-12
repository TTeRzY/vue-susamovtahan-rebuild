import Home from './components/Home.vue';
import History from './components/pages/History.vue';
import Contacts from './components/pages/Contacts.vue';
import Videos from './components/pages/Videos.vue';
import Technology from './components/pages/Technology.vue';


import Order  from './components/pages/orders/Order.vue';
import ConfirmOrder  from './components/pages/orders/ConfirmOrder.vue';

import Gallery from './components/pages/Gallery.vue';
import Gdpr from './components/pages/Gdpr.vue';
import BrashnoLimets from './components/pages/production/BrashnoLimets.vue';
import SusamovTahan from './components/pages/production/SusamovTahan.vue';
import PchelenMed from './components/pages/production/PchelenMed.vue';
import SusamovoMaslo from './components/pages/production/SusamovoMaslo.vue';


export const routes = [
  {path: '', component: Home},
  {path: '/pages/contacts', component: Contacts},
  {path: '/pages/gallery', component: Gallery},
  {path: '/pages/videos', component: Videos},
  {path: '/pages/gdpr', component: Gdpr},
  {path: '/pages/technology', component: Technology},
  {path: '/pages/production/history', component: History},
  {path: '/pages/production/susamov-tahan', component: SusamovTahan},
  {path: '/pages/production/susamovo-maslo', component: SusamovoMaslo},
  {path: '/pages/production/pchelen-med', component: PchelenMed},
  {path: '/pages/production/brashno-ot-limets', component: BrashnoLimets},
  {path: '/pages/pages/orders/', component: Order, children: [
      {path: '/pages/orders/confirm-order', component: ConfirmOrder}
    ]}
];