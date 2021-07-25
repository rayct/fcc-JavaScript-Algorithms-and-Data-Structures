import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://www.tailoredscaffolding.co.uk/gallery.html');
  sleep(1);
}
