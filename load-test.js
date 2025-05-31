import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 50 }, 
    { duration: '5m', target: 200 }, 
    { duration: '2m', target: 0 }, 
  ],
};

export default function () {
  http.get('http://localhost:8000/graphql/');

  sleep(1);
}
